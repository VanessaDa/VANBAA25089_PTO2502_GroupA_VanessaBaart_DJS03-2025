/** @module components/PodcastPreview */

import React, { useMemo } from "react";
import { timeAgo } from "../utils/formatDate";
import GenreTag from "./GenreTag";

/**
 * Reusable podcast preview card
 * @param {{ podcast: {
 *   id:string, title:string, image:string, seasons:number,
 *   genres:string[]|number[], updated:string
 * }, genreLookup: Record<string,string> }} props
 * @returns {JSX.Element}
 */
export default function PodcastPreview({ podcast, genreLookup }) {
  const { image, title, seasons, updated, genres } = podcast;

  const genreNames = useMemo(() => {
    if (!Array.isArray(genres)) return [];
    return genres.map((g) => genreLookup[String(g)] || String(g));
  }, [genres, genreLookup]);

  const lastUpdated = useMemo(() => {
    try {
      return timeAgo(new Date(updated));
    } catch {
      return "recently";
    }
  }, [updated]);
  return (
    <article className="podcast-card">
      <div className="podcast-card__media">
        <img
          className="podcast-card__image"
          src={image}
          alt={`${title} cover art`}
          loading="lazy"
        />
      </div>

      <div className="podcast-card__body">
        <h3 className="podcast-card__title">{title}</h3>
        <p className="podcast-card__meta">
          {seasons} {seasons === 1 ? "season" : "seasons"} · updated{" "}
          {lastUpdated}
        </p>
        <div className="podcast-card__genres">
          {genreNames.slice(0, 5).map((g) => (
            <GenreTag key={g} label={g} />
          ))}
          {genreNames.length > 5 && (
            <GenreTag label={`+${genreNames.length - 5}`} />
          )}
        </div>
      </div>
    </article>
  );
}
