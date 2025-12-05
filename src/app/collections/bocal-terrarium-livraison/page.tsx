"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, User, ShoppingCart, ChevronDown, SlidersHorizontal, Grid3x3, List, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AccessoriesCollection() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [visibleProducts, setVisibleProducts] = useState(50);

  // Sample product data - in real app this would come from API
  const products = Array.from({ length: 75 }, (_, i) => ({
    id: i + 1,
    name: i === 0 ? "Cache pot Bari bordeaux" : i === 1 ? "Cache pot Bari Ocre" : i === 2 ? "Panier Comporta - Naturel" : i === 3 ? "Panier Comporta - Noir" : i === 4 ? "Panier naturel Ø14 - NATUREL" : `Cache pot ${i}`,
    brand: i < 4 ? "La Green Touch" : i < 10 ? "Colibri" : i < 20 ? "Green Boutiq" : "La Green Touch",
    price: Math.floor(Math.random() * 80) + 7,
    oldPrice: Math.floor(Math.random() * 100) + 10,
    size: i < 10 ? `Cache pot - ⌀${13 + i}cm ~ Ø${14 + i}cm` : `Panier - ⌀${24 + i}cm ~ Ø${26 + i}cm`,
    isSoldOut: i > 65,
    hasPromo: i < 5,
    image: `https://ext.same-assets.com/3048998827/${3418759541 + i * 100}.jpeg`
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Reuse from home page */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="bg-[#f0ede9] text-[#040404] text-center py-2 px-4 text-xs">
          <p>Nouvelle collection de Plante + pot : un cadeau Noël · Livraison offerte dès 60€ d'achat</p>
        </div>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <h1 className="text-lg sm:text-2xl font-light tracking-wide whitespace-nowrap cursor-pointer">
                LA <span className="italic font-serif">green</span> TOUCH<sup className="text-xs">®</sup>
              </h1>
            </Link>

            <div className="flex-1 max-w-xl hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Je veu"
                  className="pl-10 bg-[#f0ede9] border-none rounded-full"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <User className="h-6 w-6 cursor-pointer hover:text-[#6a8f53] transition-colors" />
              <ShoppingCart className="h-6 w-6 cursor-pointer hover:text-[#6a8f53] transition-colors" />
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">
          <Link href="/" className="hover:text-[#6a8f53]">Accueil</Link>
          <span className="mx-2">›</span>
          <span>Accessoires</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#c9a882] p-8 rounded-lg text-white"
            >
              <h1 className="text-3xl sm:text-4xl font-light mb-4">Accessoires</h1>
              <p className="text-sm mb-4 leading-relaxed">
                Que vous soyez un jardinier amateur ou un expert en botanique, notre collection d'<strong>accessoires est conçue pour répondre aux besoins de vos plantes d'intérieur et terrariums</strong>.
              </p>
              <p className="text-sm mb-4 leading-relaxed">
                N'attendez plus et vivez une véritable <strong>expérience de jardinage d'intérieur</strong> !
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src="https://ext.same-assets.com/3048998827/695050917.jpeg"
                alt="Accessoires"
                className="rounded-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter and Sort Bar */}
      <div className="container mx-auto px-4 py-4 border-y">
        <div className="flex items-center justify-between gap-4">
          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filtrer
          </Button>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-sm">
                Trier par <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>En vedette</DropdownMenuItem>
                <DropdownMenuItem>Prix croissant</DropdownMenuItem>
                <DropdownMenuItem>Prix décroissant</DropdownMenuItem>
                <DropdownMenuItem>Nouveautés</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex gap-2">
              <span className="text-sm text-gray-600">Voir en</span>
              <Button
                variant="ghost"
                size="icon"
                className={`h-8 w-8 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`h-8 w-8 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid3x3 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className={`grid ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}
        >
          {products.slice(0, visibleProducts).map((product, i) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow border-none">
                <div className="relative overflow-hidden">
                  {product.hasPromo && (
                    <Badge className="absolute top-3 left-3 bg-[#6a8f53] text-white rounded-full z-10">
                      Promo Noël
                    </Badge>
                  )}
                  {product.isSoldOut && (
                    <Badge className="absolute top-3 left-3 bg-black text-white rounded-sm z-10">
                      Épuisé
                    </Badge>
                  )}
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                  <h3 className="font-semibold mb-2 text-sm group-hover:text-[#6a8f53] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">{product.size}</p>
                  <div className="flex items-center gap-2">
                    {product.hasPromo ? (
                      <>
                        <span className="font-bold text-lg">{product.price},00 €</span>
                        <span className="text-sm text-gray-400 line-through">{product.oldPrice},00 €</span>
                      </>
                    ) : (
                      <span className="font-bold text-lg">{product.price},00 €</span>
                    )}
                  </div>
                  {product.hasPromo && (
                    <p className="text-xs text-gray-500 mt-1">Prix dégressif : {product.price - 4},00 €</p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        {visibleProducts < products.length && (
          <div className="text-center mt-12">
            <p className="text-sm text-gray-600 mb-4">Affichage {visibleProducts} sur {products.length}</p>
            <Button
              onClick={() => setVisibleProducts(prev => Math.min(prev + 25, products.length))}
              className="bg-[#6a8f53] hover:bg-[#5c7847] text-white rounded-full px-8"
            >
              Afficher plus
            </Button>
          </div>
        )}
      </section>

      {/* Feature Badges */}
      <section className="py-8 bg-[#d4a5a5] bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "https://ext.same-assets.com/3048998827/2002287591.png", title: "Direct producteur", desc: "Qualité & fraîcheur" },
              { icon: "https://ext.same-assets.com/3048998827/803388405.png", title: "Facile d'entretien", desc: "Guide inclus & aide 5/7" },
              { icon: "https://ext.same-assets.com/3048998827/2696573779.png", title: "Livraison rapide", desc: "et sécurisée" },
              { icon: "https://ext.same-assets.com/3048998827/1470235617.png", title: "Idée cadeaux", desc: "Original & durable" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <img src={item.icon} alt={item.title} className="w-12 h-12 mb-3" />
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#c9a882]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-2xl sm:text-3xl font-light mb-6">
              Les 5 bonnes raisons de (s')offrir un accessoire pour plante d'intérieur
            </h2>
            <ul className="space-y-3 mb-6 text-sm">
              <li><strong>1)</strong> Prendre soin de votre plante et terrarium avec des outils adaptées</li>
              <li><strong>2)</strong> Large choix d'accessoires</li>
              <li><strong>3)</strong> Outre cela nous sélectionnons des accessoires tendances et décoratifs pour votre intérieur</li>
              <li><strong>4)</strong> Nos accessoires sont fabriqués avec des matériaux de qualités et durables</li>
              <li><strong>5)</strong> En plus d'une création végétale ou bien d'une plante, cela vient complèter le cadeau</li>
            </ul>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#c9a882] rounded-full">
              Lire l'article
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://ext.same-assets.com/3048998827/3039264398.jpeg"
              alt="Des plantes en direct producteur à petit prix"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-6">
                <h2 className="text-3xl font-light mb-6">Des plantes en direct producteur à petit prix</h2>
                <p className="mb-8">
                  Nous garantissons les meilleurs prix du marché car il n'y a aucun intermédiaire entre nos producteurs et vous. Une meilleure qualité et de fraîcheur pour vos plantes, un impact carbone réduit, une consommation plus responsable.
                </p>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8">
                  Nos engagements
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f8f6f4]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-light mb-8 text-center">Une question sur nos accessoires ?</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">Livraison et réception</h3>
            <div className="space-y-4">
              {[
                "Comment sera emballé ma commande ?",
                "Quels sont les détails de livraison ?",
                "Combien de temps peut rester ma plante dans le carton ?"
              ].map((question, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="border-b pb-4"
                >
                  <button className="w-full flex items-center justify-between text-left hover:text-[#6a8f53] transition-colors">
                    <span className="font-medium">{question}</span>
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">Quel entretien pour ma plante d'intérieur ?</h3>
            <div className="space-y-4">
              {[
                "Comment savoir quand arroser ?",
                "Comment trouver la bonne exposition pour une plante d'intérieur ?"
              ].map((question, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="border-b pb-4"
                >
                  <button className="w-full flex items-center justify-between text-left hover:text-[#6a8f53] transition-colors">
                    <span className="font-medium">{question}</span>
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Comment détecter si ma plante est malade ?</h3>
            <div className="space-y-4">
              {[
                "Ma plante est malade, que faire ?"
              ].map((question, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="border-b pb-4"
                >
                  <button className="w-full flex items-center justify-between text-left hover:text-[#6a8f53] transition-colors">
                    <span className="font-medium">{question}</span>
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-6">Problème avec ma commande et retours</h3>
            <div className="space-y-4">
              {[
                "Je n'ai pas reçu ma commande que dois-je faire ?",
                "Ma plante est abîmée que dois-je faire ?",
                "Combien de temps est garantie ma plante ?",
                "Comment puis-je retourner ma commande ?",
                "Comment suivre ma commande ?",
                "Je n'ai pas reçu la bonne plante, que faire ?"
              ].map((question, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="border-b pb-4"
                >
                  <button className="w-full flex items-center justify-between text-left hover:text-[#6a8f53] transition-colors">
                    <span className="font-medium">{question}</span>
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back to top */}
      <div className="container mx-auto px-4 py-8 text-center">
        <Button variant="link" className="text-[#6a8f53]">
          Retour en haut
        </Button>
      </div>

      {/* Footer - Same as homepage */}
      <footer className="bg-[#f8f6f4] pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4 text-sm">Livraison de plantes</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53]">Idées cadeaux Noël</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53]">Livraison de terrarium et kokedama</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53]">Livraison de plantes d'intérieur</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Entretien de plantes, conseils et astuces</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53]">Guide d'entretien de plantes</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53]">Le Green Blog : Conseils et astuces</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53]">Entretien terrarium</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Une entreprise familiale française</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53]">Nos producteurs en direct</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53]">Notre concept</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53]">Nos engagements</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Bons plans Plantes</h4>
              <p className="text-xs text-gray-700 mb-4">Inscrivez-vous à notre newsletter</p>
              <div className="flex gap-2">
                <Input type="email" placeholder="Votre e-mail" className="bg-white text-xs" />
                <Button className="bg-[#6a8f53] hover:bg-[#5c7847]">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-600">
            <p>© 2025 La Green Touch. Commerce électronique propulsé par Shopify</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
