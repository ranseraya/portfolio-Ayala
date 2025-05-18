import * as React from "react"
import { ArrowRightIcon } from 'lucide-react'
import { cn } from "@/lib/utils"

function Card({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props} />
  );
}

function CardHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props} />
  );
}

function CardTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props} />
  );
}

function CardDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

function CardAction({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props} />
  );
}

function CardContent({
  className,
  ...props
}) {
  return (<div data-slot="card-content" className={cn("px-6", className)} {...props} />);
}

function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props} />
  );
}

function CardArticle({ title, description, date, tags, url }) {
  return (
    <article className="rounded-xl bg-[#1f1f1f] hover:bg-[#2a2a2a] transition p-4 shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-400 mt-1">{description}</p>
      <div className="mt-5 flex gap-2 text-sm text-gray-500">
        {tags.map((tag, index) => {
          return (
            <span key={index}>#{tag}</span>
          )
        })}
      </div>
      <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
        <a href={url} className="text-xl text-white font-bold flex justify-center items-center gap-2 hover:text-blue-400 transition group">Read More <ArrowRightIcon className="group-hover:translate-x-2 transition" width={25} height={25} /></a>
        <span>{date}</span>
      </div>
    </article>
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardArticle,
}
