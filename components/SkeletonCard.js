/**
 * SkeletonCard: loading placeholder with shimmer.
 * @module components/SkeletonCard
 * @returns {JSX.Element}
 */
import React from "react";

export default function SkeletonCard() {
  return (
    <div
      className="skeleton-card"
      role="status"
      aria-label="Loading content"
      aria-live="polite"
    >
      <div className="skeleton skeleton-thumb" />
      <div className="skeleton-line-group">
        <div className="skeleton skeleton-line w-70" />
        <div className="skeleton skeleton-line w-40" />
        <div className="skeleton-chip-row">
          <div className="skeleton skeleton-chip" />
          <div className="skeleton skeleton-chip" />
          <div className="skeleton skeleton-chip" />
        </div>
      </div>
    </div>
  );
}
