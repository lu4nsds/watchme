import prisma from "@/lib/prisma";
import MovieCard from '../components/MovieCard';
import { Pagination } from "../components/Pagination";
import { revalidatePath } from "next/cache";

export type PageProps = {
  params: { [key: string] : string | string[] | undefined};
  searchParams: { [key: string] : string | string[] | undefined};
}
export type FetchMoviesType = typeof fetchMovies;

const PAGE_SIZE = 8;

const fetchMovies = async ({take = PAGE_SIZE, skip = 0}) =>{
  "use server";
  const results = await prisma.movie.findMany({
    take,
    skip,
    orderBy: {
      title: 'asc'
    },
  })

  const total : number = await prisma.movie.count();

  revalidatePath('/Movies')

  return { 
    data: results,
    metadata: {
      hasNextPage: skip + take < total,
      totalPages: Math.ceil(total/take),
    }
  }
}

const Movies = async  (props: PageProps) => {
  const pageNumber = Number(props?.searchParams?.page || 1);
  const take = PAGE_SIZE;
  const skip = (pageNumber - 1) * take;
  const result = await fetchMovies({take, skip});
  return (
    <div className="p-20">
      <Pagination {...props.searchParams} {...result.metadata}/>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {result.data.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
    </div>
    </div>
  );
};

export default Movies;
