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