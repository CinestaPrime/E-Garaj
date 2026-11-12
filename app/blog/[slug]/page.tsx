import Link from "next/link";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import SiteHeader from "../../SiteHeader";
import BrandFooter from "../../BrandFooter";
import {blogPosts,getBlogPost} from "../posts";
import "../blog.css";
const site="https://egarageauto.com";
export function generateStaticParams(){return blogPosts.map(post=>({slug:post.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const post=getBlogPost(slug);if(!post)return {};const url=`${site}/blog/${slug}`;return {title:`${post.title} | E-GARAGE`,description:post.description,alternates:{canonical:url},openGraph:{type:"article",title:post.title,description:post.description,url,images:[{url:`${site}${post.cover}`,alt:post.title}],publishedTime:post.date},twitter:{card:"summary_large_image",title:post.title,description:post.description,images:[`${site}${post.cover}`]}};}
export default async function BlogArticle({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const post=getBlogPost(slug);if(!post)notFound();const related=blogPosts.filter(item=>item.slug!==post.slug).sort((a,b)=>Number(b.category===post.category)-Number(a.category===post.category)).slice(0,3);
const articleLd={"@context":"https://schema.org","@type":"BlogPosting",headline:post.title,description:post.description,datePublished:post.date,dateModified:post.date,inLanguage:"tr-TR",image:`${site}${post.cover}`,mainEntityOfPage:`${site}/blog/${post.slug}`,author:{"@type":"Organization",name:"E-GARAGE"},publisher:{"@type":"Organization",name:"E-GARAGE",url:site}};
const crumbs={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Ana Sayfa",item:site},{"@type":"ListItem",position:2,name:"Blog",item:`${site}/blog`},{"@type":"ListItem",position:3,name:post.title,item:`${site}/blog/${slug}`}]};
return <main className="ks-site ks-blog"><SiteHeader active="home"/>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleLd).replace(/</g,"\\u003c")}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(crumbs).replace(/</g,"\\u003c")}}/>
<article className="ks-blog-article"><nav className="ks-blog-breadcrumb" aria-label="Sayfa yolu"><Link href="/">E-GARAGE</Link><span>/</span><Link href="/blog">BLOG</Link><span>/</span><span>{post.category.toLocaleUpperCase("tr")}</span></nav>
<div className="ks-blog-article-heading"><span className="ks-overline">{post.category.toLocaleUpperCase("tr")} · {post.readingMinutes} DK OKUMA</span><h1>{post.title}</h1><p>{post.description}</p><time dateTime={post.date}>12 KASIM 2026</time></div>
<div className="ks-blog-article-image"><img src={post.cover} alt={`${post.title} için özel hazırlanmış otomotiv illüstrasyonu`}/></div>
<div className="ks-blog-article-body"><aside><span>E-GARAGE EDITORIAL</span><p>OTOMOTİV / TEKNOLOJİ / TASARIM</p><Link href="/blog">← TÜM YAZILAR</Link></aside><div className="ks-blog-prose"><p className="ks-blog-lead">{post.description}</p>{post.sections.map((section,i)=><section key={section.heading} id={`bolum-${i+1}`}><h2>{section.heading}</h2><p>{section.body}</p></section>)}<div className="ks-blog-article-cta"><strong>Kendi tasarımınızı keşfedin</strong><p>E-GARAGE'ın dijital araç stüdyosunu inceleyin.</p><Link href="/studio">ARAÇ STÜDYOSU ↗</Link></div></div></div>
</article>
<section className="ks-blog-related"><div className="ks-blog-heading"><h2>İLGİNİZİ ÇEKEBİLİR</h2><Link href="/blog">TÜM YAZILAR ↗</Link></div><div className="ks-blog-grid">{related.map(item=><Link href={`/blog/${item.slug}`} className="ks-blog-card" key={item.slug}><div className="ks-blog-cover"><img loading="lazy" src={item.cover} alt={item.title}/></div><div className="ks-blog-card-meta">{item.category}</div><h3>{item.title}</h3></Link>)}</div></section>
<BrandFooter/></main>;}
