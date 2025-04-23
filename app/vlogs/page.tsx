import VlogsGrid from "@/components/vlogs-grid"

export default function VlogsPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">Vlogs</h1>
            <p className="text-xl font-light text-muted-foreground max-w-2xl">
              Behind the scenes, tutorials, and travel adventures
            </p>
          </div>
          <div className="flex items-center gap-2">
            <select className="bg-transparent border-b border-border py-2 pr-8 focus:outline-none">
              <option value="all">All Categories</option>
              <option value="behind-the-scenes">Behind the Scenes</option>
              <option value="tutorials">Tutorials</option>
              <option value="travel">Travel</option>
            </select>
          </div>
        </div>
        <VlogsGrid />
      </section>
    </main>
  )
}
