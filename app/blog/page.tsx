import Link from "next/link";
import type {Metadata} from "next";
import SiteHeader from "../SiteHeader";
import BrandFooter from "../BrandFooter";
import {blogPosts,blogCategories} from "./posts";
import "./blog.css";
export const metadata:Metadata={title:"Otomotiv Blogu | E-GARAGE",description:"Otomotivde yapay zekâ, araç tasarımı, elektrikli otomobiller ve modifiye üzerine E-GARAGE editoryal içerikleri.",alternates:{canonical:"https://egarageauto.com/blog"},openGraph:{title:"E-GARAGE Blog | Otomotiv ve Teknoloji",description:"Tasarım, otomotiv ve yapay zekâ dünyasını keşfedin.",url:"https://egarageauto.com/blog",type:"website"}};
export default async function BlogPage({searchParams}:{searchParams:Promise<{kategori?:string}>}){
 const {kategori}=await searchParams;
 const selected=kategori&&blogCategories.includes(kategori)?kategori:undefined;
 const posts=selected?blogPosts.filter(post=>post.category===selected):blogPosts;
 return <main className="ks-site ks-blog"><SiteHeader active="home"/>
 <header className="ks-blog-hero"><span className="ks-overline">E-GARAGE / EDITORIAL</span><h1>OTOMOBİLİN<br/><em>YENİ PERSPEKTİFİ</em></h1><p>Tasarım, teknoloji ve otomobil kültürünü buluşturan fikirler. Araçların bugününü ve yarınını birlikte keşfedin.</p><div className="ks-blog-hero-mark">E / JOURNAL — 2026</div></header>
 <div className="ks-blog-wrap"><div className="ks-blog-heading"><span>KEŞFEDİN</span><span>{String(posts.length).padStart(2,"0")} YAZI</span></div><nav aria-label="Blog kategorileri" className="ks-blog-filters"><Link className={!selected?"selected":""} href="/blog">TÜMÜ</Link>{blogCategories.map(cat=><Link key={cat} className={selected===cat?"selected":""} href={`/blog?kategori=${encodeURIComponent(cat)}`}>{cat.toLocaleUpperCase("tr")}</Link>)}</nav>
 <div className="ks-blog-grid">{posts.map((post,index)=><Link href={`/blog/${post.slug}`} className="ks-blog-card" key={post.slug}><div className="ks-blog-cover"><img loading={index<3?"eager":"lazy"} src={post.cover} alt={`${post.title} konulu özgün E-GARAGE otomotiv illüstrasyonu`}/></div><div className="ks-blog-card-meta"><span>{post.category}</span><span>{post.readingMinutes} DK OKUMA</span></div><h2>{post.title}</h2><p>{post.description}</p><span className="ks-blog-card-more">YAZIYI OKU <span aria-hidden="true">↗</span></span></Link>)}</div>
 </div><BrandFooter/></main>
}