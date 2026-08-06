"use client";

import Link from "next/link";
import Image from "next/image";
import { workHref } from "@/lib/projects";

export interface WorkTileItem {
  slug: string;
  name: string;
  year: string;
  discipline: string;
  tileDiscipline?: string;
  thumbnail?: string;
  tileBg: string;
}

export default function WorkTile({ item }: { item: WorkTileItem }) {
  const href = workHref(item.slug);
  const label = item.tileDiscipline ?? item.discipline;
  const thumb = item.thumbnail;

  return (
    <li className="work-tile-item" data-work-tile>
      <div className="single-tile-wrap">
        <Link href={href} className="work-tile-row group">
          <div className="work-tile-col work-tile-col-image">
            <div className="tile-image">
              {thumb ? (
                <Image
                  src={thumb}
                  alt=""
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 72px, 108px"
                  className="tile-image-media object-cover object-center"
                />
              ) : (
                <div
                  className="tile-image-media absolute inset-0"
                  style={{ backgroundColor: item.tileBg }}
                />
              )}
            </div>
          </div>

          <div className="work-tile-col work-tile-col-title">
            <h4>
              <span>{item.name}</span>
            </h4>
            <div className="stripe" aria-hidden />
          </div>

          <div className="work-tile-col work-tile-col-discipline">
            <p>{label}</p>
          </div>

          <div className="work-tile-col work-tile-col-year">
            <p className="md:hidden">
              {label} · {item.year}
            </p>
            <p className="hidden md:block">{item.year}</p>
          </div>
        </Link>
      </div>
    </li>
  );
}
