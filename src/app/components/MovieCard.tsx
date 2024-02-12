// components/MovieCard.tsx
import React from 'react';
import Image from 'next/image';
interface MovieCardProps {
  title: string;
  description: string | null;
  image: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, description, image }) => {
  return (
    <div className="flex items-center justify-center">
  <div className="group h-96 w-80 [perspective:1000px]">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={image} alt="" />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-xs whitespace-normal truncate leading-tight max-w-[20rem] text-justify">{description}</p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default MovieCard;

