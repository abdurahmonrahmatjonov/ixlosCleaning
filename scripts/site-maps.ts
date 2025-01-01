// scripts/generate-sitemap.ts
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";

const urls = [{ url: "/", changefreq: "daily", priority: 1.0 }];

(async () => {
	const sitemap = new SitemapStream({ hostname: "https://euro-stirka.netlify.app" });
	const writeStream = createWriteStream(path.resolve(__dirname, "../public/sitemap.xml"));

	sitemap.pipe(writeStream);

	// Writing URLs to the sitemap
	urls.forEach((url) => sitemap.write(url));
	sitemap.end();

	await streamToPromise(sitemap);
	console.log("Sitemap generated successfully!");
})();
