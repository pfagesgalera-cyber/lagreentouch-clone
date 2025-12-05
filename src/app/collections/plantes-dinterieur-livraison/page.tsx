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

export default function PlantCollection() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [visibleProducts, setVisibleProducts] = useState(50);

  // Sample product data - in real app this would come from API
  const products = Array.from({ length: 178 }, (_, i) => ({
    id: i + 1,
    name: i === 0 ? "Coffret surprise - Plantes d'intérieur" : i === 1 ? "Coffret plantes dépolluantes" : i === 2 ? "Coffret Plantes Jungle fever" : `Monstera Deliciosa ${i}`,
    brand: "La Green Touch",
    price: Math.floor(Math.random() * 80) + 15,
    oldPrice: Math.floor(Math.random() * 100) + 20,
    size: "Grande Plante · ⌀60cm ~ ⌀92cm",
    hasPromo: i < 10,
    image: `https://ext.same-assets.com/3048998827/${2169875276 + i}.jpeg`
  }));

  const filterCategories = [
    "Plantes incontournables",
    "Très grandes plantes",
    "Plantes et cache-pot inclus",
    "Coffrets de plantes",
    "Voir toutes nos plantes d'intérieur",
    "Idées cadeaux"
  ];

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
                  placeholder="Je veux offrir un cad"
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
          <span>Nos plantes d'intérieur</span>
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
              <h1 className="text-3xl sm:text-4xl font-light mb-4">Nos plantes d'intérieur</h1>
              <p className="text-sm mb-4">(178 produits)</p>
              <p className="text-sm mb-4 leading-relaxed">
                <strong>Les plantes d'intérieur La Green Touch apportent fraîcheur et élégance à votre décoration tout en purifiant l'air.</strong>
              </p>
              <p className="text-sm mb-4 leading-relaxed">
                Découvrez une large sélection de plantes vertes et tropicales livrées directement depuis nos producteurs partenaires : <strong>Monstera, Calathea, Ficus, Zamioculcas, Dracaenas</strong> et bien d'autres.
              </p>
              <p className="text-sm mb-4 leading-relaxed">
                Faciles d'entretien et soigneusement emballées, nos plantes s'adaptent à toutes les pièces de la maison : du salon à la chambre.
              </p>
              <p className="text-sm mb-4 leading-relaxed">
                Que vous souhaitiez <strong>acheter une plante d'intérieur pour offrir</strong> ou embellir votre espace, profitez d'une <strong>livraison rapide et sécurisée dans toute la France</strong>.
              </p>
              <p className="text-sm">
                Chaque commande est préparée avec soin dans notre atelier pour garantir la fraîcheur et la qualité à la réception.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src="https://ext.same-assets.com/3048998827/192462298.jpeg"
                alt="Nos plantes d'intérieur"
                className="rounded-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Banner */}
      <div className="bg-[#f0ede9] py-3 overflow-hidden">
        <div className="animate-scroll flex gap-8 whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 text-sm">
              <span>Pour Noël, la livraison est offerte dès 60€ !</span>
              <span>Pour Noël, la livraison est offerte dès 60€ !</span>
              <span>Pour Noël, la livraison est offerte dès 60€ !</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Pills */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {filterCategories.map((category, i) => (
            <Button
              key={i}
              variant={i === 4 ? "default" : "outline"}
              className={`rounded-full whitespace-nowrap ${i === 4 ? 'bg-[#6a8f53] hover:bg-[#5c7847] text-white' : 'hover:border-[#6a8f53] hover:text-[#6a8f53]'}`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

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
                    <span className="font-bold text-lg">{product.price},00 €</span>
                    {product.hasPromo && (
                      <span className="text-sm text-gray-400 line-through">{product.oldPrice},00 €</span>
                    )}
                  </div>
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
              onClick={() => setVisibleProducts(prev => Math.min(prev + 50, products.length))}
              className="bg-[#6a8f53] hover:bg-[#5c7847] text-white rounded-full px-8"
            >
              Afficher plus
            </Button>
          </div>
        )}
      </section>

      {/* Collection Showcases */}
      <section className="py-16 bg-[#f8f6f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-8 text-center">Découvrez aussi les collections préférées de nos clients</h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "https://ext.same-assets.com/3048998827/3871110015.jpeg", title: "Edition Noël" },
              { img: "https://ext.same-assets.com/3048998827/412009267.jpeg", title: "Terrariums" },
              { img: "https://ext.same-assets.com/3048998827/2823097539.jpeg", title: "Coffret de plantes" },
              { img: "https://ext.same-assets.com/3048998827/1181504190.jpeg", title: "Plantes incontournables" },
              { img: "https://ext.same-assets.com/3048998827/2887000921.jpeg", title: "Très grandes plantes d'intérieur" },
              { img: "https://ext.same-assets.com/3048998827/634772959.jpeg", title: "Toutes nos plantes d'intérieur" },
              { img: "https://ext.same-assets.com/3048998827/346216055.jpeg", title: "Plantes vertes et pot inclus" },
              { img: "https://ext.same-assets.com/3048998827/360432476.jpeg", title: "Coffret de plantes" },
              { img: "https://ext.same-assets.com/3048998827/2588882068.jpeg", title: "Nos idées cadeaux & créations végétales" }
            ].map((collection, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              >
                <img src={collection.img} alt={collection.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-lg font-light mb-3">{collection.title}</h3>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full">
                    Voir
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: "https://ext.same-assets.com/3048998827/2994029179.jpeg", title: "Livraison de ma plante", desc: "La livraison de plantes d'intérieur à domicile fait parti de notre expertise, soyez rassuré ! Chaque plante est emballée avec soin dans un packaging adapté en fonction de la taille ou du nombre de produits." },
              { img: "https://ext.same-assets.com/3048998827/3255904024.jpeg", title: "Une offre plus transparente, des prix justes", desc: "En achetant vos plantes et caches-pots chez un même producteur, nos frais de gestion, de logistique et de transport seront minimisés. Vous ferez donc des économies et nous réduirons en plus l'impact environnemental en un seul envoi d'un point A au point B sans aucun intermédiaire" },
              { img: "https://ext.same-assets.com/3048998827/1457889713.jpeg", title: "Des plantes en direct producteur", desc: "Nous garantissons les meilleurs prix du marché car il n'y a aucun intermédiaire entre nos producteurs et vous. Une meilleure qualité et de fraîcheur pour vos plantes, un impact carbone réduit, une consommation plus responsable." }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#c9a882] rounded-lg overflow-hidden text-white"
              >
                <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-sm mb-4">{card.desc}</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#c9a882] rounded-full">
                    {i === 0 ? "Livraison" : i === 1 ? "Plus d'info" : "Nos engagements"}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f8f6f4]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-light mb-8 text-center">Une question sur nos plantes d'intérieur ?</h2>
          <h3 className="text-xl font-semibold mb-8">Les questions les plus courantes sur nos plantes d'intérieur</h3>

          <div className="space-y-4">
            {[
              "Quelles sont les plantes d'intérieur les plus faciles à entretenir ?",
              "Quelles plantes d'intérieur choisir pour un intérieur peu lumineux ?",
              "Quelles sont les plantes les plus dépolluantes ?",
              "Quelles grandes plantes d'intérieur pour mon salon ?",
              "Plante d'intérieur avec pot inclus : idéal à offrir",
              "Nos coffrets de plantes",
              "Où acheter une plante d'intérieur avec livraison rapide ?"
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

          <div className="mt-12 space-y-4">
            <h3 className="text-xl font-semibold mb-4">Quel entretien pour ma plante d'intérieur ?</h3>
            {[
              "Comment savoir quand arroser ?",
              "Comment trouver la bonne exposition pour une plante d'intérieur ?",
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

          <div className="mt-12 space-y-4">
            <h3 className="text-xl font-semibold mb-4">Livraison et réception de ma plante d'intérieur</h3>
            {[
              "Comment sera emballé ma plante d'intérieur ?",
              "Combien de temps peut rester ma plante dans le carton ?",
              "Quels sont les détails de livraison ?",
              "Combien de temps est garanti ma plante ?",
              "Comment suivre ma commande ?",
              "J'ai un problème avec ma commande"
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
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://ext.same-assets.com/3048998827/418193732.jpeg"
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

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
