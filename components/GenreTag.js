/**
 * GenreTag: small rounded badge for genre names.
 * @module components/GenreTag
 * @param {{ label: string }} props
 * @returns {JSX.Element}
 */
import React from "react";

export default function GenreTag({ label }) {
  return <span className="tag">{label}</span>;
}
