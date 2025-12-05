"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search, User, ShoppingCart, ChevronDown, Star, ArrowRight, Mic, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

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

const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Je suis très contente de ma commande reçue (emballage soigné, cache pot arrivé sans bobo, la plante en très grande forme). Essayer, c'est l'adopter, j'en suis à ma deuxième commande. Laissez votre cœur aller vers de belles plantes...",
      author: "ANNE-CLAUDE",
      title: "client certifié"
    },
    {
      text: "Service impeccable ! Les plantes sont arrivées en parfait état, très bien emballées. La qualité est au rendez-vous et l'équipe est très réactive. Je recommande vivement !",
      author: "MARIE-LOUISE",
      title: "client certifié"
    },
    {
      text: "Excellente expérience d'achat. Les terrariums sont magnifiques et la livraison a été rapide. C'est un plaisir de commander chez La Green Touch !",
      author: "PHILIPPE",
      title: "client certifié"
    }
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedTestimonial(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#040404] text-white text-center py-2 px-4 text-xs sm:text-sm"
      >
        <p>Anticipez vos cadeaux et faites-vous livrer juste avant Noël en programmant votre livraison</p>
      </motion.div>

      {/* Top Info Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-[#f0ede9] text-[#040404] text-center py-2 px-4 text-xs"
      >
        <p>Nouvelle collection de Plante + pot : un cadeau Noël · Livraison offerte dès 60€ d'achat</p>
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white border-b sticky top-0 z-50 shadow-sm"
      >
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-lg sm:text-2xl font-light tracking-wide whitespace-nowrap">
                LA <span className="italic font-serif">green</span> TOUCH<sup className="text-xs">®</sup>
              </h1>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="flex-1 max-w-xl hidden md:block">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-hover:text-[#6a8f53] transition-colors" />
                <Input
                  type="text"
                  placeholder="Comment entretien"
                  className="pl-10 pr-10 bg-[#f0ede9] border-none rounded-full hover:bg-[#e8e4df] transition-colors"
                />
                <Mic className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-hover:text-[#6a8f53] transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <User className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer hover:text-[#6a8f53] transition-colors" />
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer hover:text-[#6a8f53] transition-colors" />

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4 mt-8">
                    <a href="#" className="text-lg font-medium hover:text-[#6a8f53] transition-colors">Noël</a>
                    <a href="#" className="text-lg font-medium hover:text-[#6a8f53] transition-colors">Plantes d'intérieur</a>
                    <a href="#" className="text-lg font-medium hover:text-[#6a8f53] transition-colors">Idées cadeaux</a>
                    <a href="#" className="text-lg font-medium hover:text-[#6a8f53] transition-colors">Plantes d'extérieur</a>
                    <a href="#" className="text-lg font-medium hover:text-[#6a8f53] transition-colors">Décoration & accessoires</a>
                    <a href="#" className="text-lg font-medium hover:text-[#6a8f53] transition-colors">Entretien plantes</a>
                    <a href="#" className="text-lg font-medium hover:text-[#6a8f53] transition-colors">Ateliers</a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="mt-4 hidden lg:flex gap-6 text-sm">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-[#6a8f53] transition-colors outline-none">
                Noël <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Terrariums & créations végétales</DropdownMenuItem>
                <DropdownMenuItem>Plantes avec pot inclus</DropdownMenuItem>
                <DropdownMenuItem>Kit DIY végétal</DropdownMenuItem>
                <DropdownMenuItem>Coffrets pour Noël</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-[#6a8f53] transition-colors outline-none">
                Plantes d'intérieur <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Les favoris de nos clients</DropdownMenuItem>
                <DropdownMenuItem>Plantes et cache-pot inclus</DropdownMenuItem>
                <DropdownMenuItem>Lot de plantes</DropdownMenuItem>
                <DropdownMenuItem>Plantes en promotion</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-[#6a8f53] transition-colors outline-none">
                Idées cadeaux <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Kokedama</DropdownMenuItem>
                <DropdownMenuItem>Plante en hydroculture</DropdownMenuItem>
                <DropdownMenuItem>Terrarium</DropdownMenuItem>
                <DropdownMenuItem>Roses éternelles</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button className="flex items-center gap-1 hover:text-[#6a8f53] transition-colors">
              Plantes d'extérieur <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-1 hover:text-[#6a8f53] transition-colors">
              Décoration & accessoires <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-1 hover:text-[#6a8f53] transition-colors">
              Entretien plantes <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-1 hover:text-[#6a8f53] transition-colors">
              Ateliers <ChevronDown className="h-4 w-4" />
            </button>
          </nav>

          {/* Search Bar - Mobile */}
          <div className="mt-3 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Rechercher"
                className="pl-10 pr-10 bg-[#f0ede9] border-none rounded-full text-sm"
              />
              <Mic className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-cover bg-center"
        style={{backgroundImage: 'url(https://ext.same-assets.com/3048998827/3296907923.jpeg)'}}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative container mx-auto px-4 h-full flex items-end pb-6 sm:pb-12">
          {/* Feature boxes at bottom */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full"
          >
            {[
              { icon: "https://ext.same-assets.com/3048998827/2287139489.png", title: "Commandez plusieurs plantes", desc: "chez un même producteur" },
              { icon: "https://ext.same-assets.com/3048998827/2287139489.png", title: "Un seul colis utiles", desc: "Diminution des frais de gestion & logistique" },
              { icon: "https://ext.same-assets.com/3048998827/527549561.png", title: "Economies", desc: "Essentiel à impact environnemental réduit" },
              { icon: "https://ext.same-assets.com/3048998827/2495046300.png", title: "Livraison sécurisée", desc: "en 3 à 4 jours ouvrés" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <img src={item.icon} alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Gift Ideas Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 text-gray-800"
          >
            Toutes nos idées cadeaux pour Noël
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {/* Left Card - Text Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-[#c9a882] p-6 sm:p-8 rounded-lg text-white"
            >
              <h3 className="text-xl sm:text-2xl font-light mb-4">Plantes & créations végétales</h3>
              <p className="text-sm mb-6 leading-relaxed">
                Découvrez nos <strong>idées cadeaux green pour Noël</strong> une sélection unique de <strong>plantes d'intérieur, terrariums, kokedamas</strong> et <strong>créations végétales artisanales</strong>.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#c9a882] rounded-full transition-all">
                Voir tout
              </Button>
            </motion.div>

            {/* Product Cards */}
            {[
              { img: "https://ext.same-assets.com/3048998827/2169875276.jpeg", brand: "La Green Touch", name: "Duo de Tillandsia socle Led Edition", size: "Idée Cadeau · ⌀25cm ~ ⌀11cm", price: "84,00 €", oldPrice: "94,00 €" },
              { img: "https://ext.same-assets.com/3048998827/3931252935.jpeg", brand: "Kindhome", name: "Kit Terrarium DIY - SAMA", size: "Kit · ⌀27cm ~ ⌀27cm", price: "À partir de 69,00 €", oldPrice: "75,00 €" },
              { img: "https://ext.same-assets.com/3048998827/355558673.jpeg", brand: "Federer", name: "Kokedama - Asparagus", size: "Kokedama · ⌀30cm ~ ⌀20cm", price: "46,00 €", oldPrice: "51,00 €" }
            ].map((product, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="overflow-hidden group cursor-pointer border-none shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden">
                    <Badge className="absolute top-3 left-3 bg-[#6a8f53] text-white rounded-full z-10">Promo Noël</Badge>
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={product.img}
                      alt={product.name}
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                    <h4 className="font-semibold mb-2 text-sm group-hover:text-[#6a8f53] transition-colors">{product.name}</h4>
                    <p className="text-xs text-gray-600 mb-3">{product.size}</p>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">{product.price}</span>
                      <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Plant Categories Grid */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#f8f6f4]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 text-gray-800"
          >
            Spécialiste en plantes d'intérieur & créations végétales
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {[
              { img: "https://ext.same-assets.com/3048998827/3784303066.jpeg", title: "Plantes d'intérieur notre sélection", span: "" },
              { img: "https://ext.same-assets.com/3048998827/1220004538.jpeg", title: "Créations végétales : Terrarium, Kokedama, Hydroculture", span: "lg:row-span-2" },
              { img: "https://ext.same-assets.com/3048998827/108317074.jpeg", title: "Très grande plante", span: "" },
              { img: "https://ext.same-assets.com/3048998827/2258539807.jpeg", title: "Plante + pot inclus", span: "" },
              { img: "https://ext.same-assets.com/3048998827/1039584410.jpeg", title: "Coffrets de plantes", span: "" }
            ].map((cat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`relative h-64 sm:h-80 rounded-lg overflow-hidden group cursor-pointer ${cat.span}`}
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-2xl font-light mb-3">{cat.title}</h3>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full transition-all">
                    Voir
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://ext.same-assets.com/3048998827/801548113.jpeg"
                alt="Ateliers sur Bordeaux"
                className="rounded-lg w-full hover:shadow-xl transition-shadow"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6">Ateliers sur Bordeaux</h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                Après plusieurs années sur Paris et banlieue parisienne, <strong>La Green Touch</strong> est désormais présente aujourd'hui sur <strong>Bordeaux</strong> pour vous proposer des <strong>ateliers DIY autour du végétal</strong> : Terrarium, kokedama, Hydroculture, rempotage...
              </p>
              <Button className="bg-[#6a8f53] hover:bg-[#5c7847] text-white rounded-full transition-all hover:shadow-lg">
                Plus d'infos
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#f8f6f4]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12 text-center"
          >
            Livraison sécurisée de plantes en France et en Europe
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12"
          >
            <motion.img
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              src="https://ext.same-assets.com/3048998827/309870879.jpeg"
              alt="Packaging"
              className="rounded-lg w-full h-60 sm:h-80 object-cover hover:shadow-xl transition-all cursor-pointer"
            />
            <motion.div
              variants={fadeInUp}
              className="relative rounded-lg overflow-hidden"
            >
              <img
                src="https://ext.same-assets.com/3048998827/166743260.jpeg"
                alt="Livraison"
                className="w-full h-60 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <p className="text-sm sm:text-lg mb-4">Edition Noël · Pour programmer votre livraison,<br className="hidden sm:inline"/>rendez-vous en page panier et sélectionnez la<br className="hidden sm:inline"/>semaine que vous souhaitez</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full transition-all">
                    Tout savoir sur la livraison
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-light mb-4 text-center"
          >
            Pourquoi acheter des plantes chez nous ?
          </motion.h2>
          <p className="text-center mb-8 sm:mb-12">
            <a href="#" className="text-[#6a8f53] hover:underline">Plus d'infos</a>
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              { img: "https://ext.same-assets.com/3048998827/2221627771.jpeg", title: "Entreprise familiale", desc: "La Green Touch est née d'une volonté de combiner une passion pour la décoration végétale et le désir d'entreprendre afin de proposer une expérience végétale unique accessible à tous !", link: "Notre histoire" },
              { img: "https://ext.same-assets.com/3048998827/1484112868.jpeg", title: "Expertise", desc: "Notre équipe s'engage à vous partager son savoir-faire, vous démontrer son expertise en sélectionnant des plantes de qualité et originales, un accompagnement et une aide sur l'entretien.", link: "Nos garanties" },
              { img: "https://ext.same-assets.com/3048998827/1920648405.jpeg", title: "En direct producteur", desc: "Il n'y a aucun intermédiaire entre nos producteurs, sélectionnés par nos. Une meilleure qualité et de fraîcheur pour vos plantes, Un impact carbone réduit.", link: "Plus d'info" },
              { img: "https://ext.same-assets.com/3048998827/3962767463.jpeg", title: "Des prix justes", desc: "En commandant chez un même producteur plusieurs produits et plantes, vous bénéficierez du meilleur prix sur le marché.", link: "Plus d'info" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={item.img}
                  alt={item.title}
                  className="w-full h-36 sm:h-48 object-cover rounded-lg mb-4 group-hover:shadow-xl transition-all"
                />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                <a href="#" className="text-sm text-[#6a8f53] hover:underline inline-block">{item.link}</a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#f8f6f4]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-light mb-2 text-center"
          >
            Le Green blog
          </motion.h2>
          <p className="text-center mb-8 sm:mb-12">
            <a href="#" className="text-[#6a8f53] hover:underline">Voir tout</a>
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              { img: "https://ext.same-assets.com/3048998827/3751683656.jpeg", title: "Pourquoi offrir une plante à Noël ?", excerpt: "Un cadeau vivant, durable et porteur de sens : voici 7 bonnes raisons d'offrir une plante (ou une création végétale) pour les fêtes...", date: "1 novembre 2025" },
              { img: "https://ext.same-assets.com/3048998827/711097593.jpeg", title: "10 idées cadeaux green pour un Noël éco-responsable", excerpt: "Offre du vivant, du durable et du beau : voici 10 idées cadeaux végétales éthiques, artisanales et prêtes à livrer partout en France...", date: "29 octobre 2025" },
              { img: "https://ext.same-assets.com/3048998827/1106720326.jpeg", title: "Tout savoir sur l'origine du kokedama", excerpt: "Le kokedama est bien plus qu'une simple plante décorative : c'est une véritable œuvre d'art végétal qui puise ses racines dans la tradition japonaise...", date: "24 septembre 2025" }
            ].map((blog, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="overflow-hidden cursor-pointer hover:shadow-xl transition-all group border-none">
                  <div className="overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-40 sm:h-48 object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="font-semibold mb-3 text-base sm:text-lg group-hover:text-[#6a8f53] transition-colors">{blog.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{blog.excerpt}</p>
                    <p className="text-xs text-gray-500">Laetitia Tavares | {blog.date}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Plant Selection Tool */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12 text-center"
          >
            Choisir sa plante
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              { img: "https://ext.same-assets.com/3048998827/2895369360.jpeg", title: "Une plante à offrir ?", items: ["Plantes facile d'entretien", "Plantes dépolluantes", "Plantes Petsfriendly", "Cactus & succulentes", "Plantes sans lumière"] },
              { img: "https://ext.same-assets.com/3048998827/1720527015.jpeg", title: "Décorer mon intérieur ?", items: ["Ma cuisine", "Mon salon", "Ma chambre", "Salle de bain", "Au bureau", "Extérieur"] },
              { img: "https://ext.same-assets.com/3048998827/2571844923.jpeg", title: "Une plante pour l'extérieur ?", items: ["Mon jardin", "Ma terrasse", "Mon balcon"] }
            ].map((section, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="relative h-[400px] sm:h-96 rounded-lg overflow-hidden group cursor-pointer"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={section.img}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6a8f53]/80 to-[#c9a882] group-hover:via-[#6a8f53]/90 transition-all">
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6">
                    <h3 className="text-white text-lg sm:text-xl font-light mb-4">{section.title}</h3>
                  </div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 space-y-2">
                    {section.items.map((item, j) => (
                      <button key={j} className="block w-full text-left text-white text-xs sm:text-sm hover:underline hover:translate-x-2 transition-transform">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Plant Care CTA */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#f8f6f4]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center bg-gradient-to-r from-white to-[#c9a882] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src="https://ext.same-assets.com/3048998827/3386205264.jpeg"
              alt="Tout savoir sur ma plante d'intérieur"
              className="w-full h-full object-cover"
            />
            <div className="p-6 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 text-white">Tout savoir sur ma plante d'intérieur</h2>
              <p className="text-white mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Comment <strong>entretenir ma plante</strong> ? Quand <strong>rempoter</strong> ? Quand <strong>arroser</strong> ? Si vous vous posez toutes ces questions, vous êtes au bon endroit !
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#c9a882] rounded-full transition-all">
                Guide d'entretien
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-light mb-4 text-center"
          >
            Plus de 80 000 clients nous ont déjà fait
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12 text-center"
          >
            confiance, pourquoi pas vous ?
          </motion.h3>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-3xl mx-auto text-center px-4"
                  >
                    <div className="text-4xl sm:text-6xl text-gray-200 mb-4">"</div>
                    <p className="text-base sm:text-lg text-gray-700 mb-6 italic">{testimonial.text}</p>
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-black" />
                      ))}
                    </div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedTestimonial === index ? 'bg-gray-800 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Press Mentions */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#f8f6f4]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-light mb-8 sm:mb-12 text-center"
          >
            La presse en parle !
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 sm:gap-12"
          >
            {[
              "https://ext.same-assets.com/3048998827/3004655232.jpeg",
              "https://ext.same-assets.com/3048998827/3572990679.png",
              "https://ext.same-assets.com/3048998827/1844116623.jpeg",
              "https://ext.same-assets.com/3048998827/1480595806.png",
              "https://ext.same-assets.com/3048998827/89889314.png",
              "https://ext.same-assets.com/3048998827/772835699.png"
            ].map((logo, i) => (
              <motion.img
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
                src={logo}
                alt="Press"
                className="h-8 sm:h-12 grayscale hover:grayscale-0 transition-all cursor-pointer"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative h-64 sm:h-96 rounded-lg overflow-hidden mb-8 sm:mb-12 shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src="https://ext.same-assets.com/3048998827/92205864.jpeg"
              alt="Plantes d'intérieur"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6">Plantes d'intérieur</h2>
                <p className="mb-6 sm:mb-8 text-sm sm:text-base">Découvrez notre sélection de plantes vertes, facile d'entretien et dépollantes. Livraison gratuite dès 80€ d'achat</p>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 sm:px-8 transition-all hover:shadow-lg">
                  Voir toutes nos plantes d'intérieur
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              { icon: "https://ext.same-assets.com/3048998827/1566555412.png", title: "+ de 80 000 clients", desc: "nous ont déjà fait confiance" },
              { icon: "https://ext.same-assets.com/3048998827/2440801351.png", title: "+ de 900 variétés", desc: "En direct producteur" },
              { icon: "https://ext.same-assets.com/3048998827/1403489660.png", title: "Livraison gratuite", desc: "à partir de 80€ d'achat" },
              { icon: "https://ext.same-assets.com/3048998827/1419709499.png", title: "Idées cadeaux", desc: "Uniques et durables" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 group"
              >
                <motion.img
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  src={item.icon}
                  alt=""
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base group-hover:text-[#6a8f53] transition-colors">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f8f6f4] pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12 bg-white rounded-lg p-4 sm:p-6 text-xs sm:text-sm text-center"
          >
            <p>Livraison sécurisée de plantes d'intérieur et extérieur en France et en Europe. Gratuite à partir de 80€ d'achat</p>
            <Button variant="link" className="text-[#6a8f53] hover:underline">Plus d'infos</Button>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12"
          >
            <motion.div variants={fadeInUp}>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Livraison de plantes</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53] transition-colors">Idées cadeaux Noël</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53] transition-colors">Livraison de terrarium et kokedama</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53] transition-colors">Livraison de kit DIY terrarium</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53] transition-colors">Livraison de plantes d'intérieur</a></li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Entretien de plantes, conseils et astuces</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53] transition-colors">Guide d'entretien de plantes</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53] transition-colors">Le Green Blog : Conseils et astuces</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53] transition-colors">Entretien terrarium</a></li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Une entreprise familiale française</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53] transition-colors">Nos producteurs en direct</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53] transition-colors">Notre concept</a></li>
                <li><a href="#" className="text-gray-700 hover:text-[#6a8f53] transition-colors">Nos engagements</a></li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Bons plans Plantes</h4>
              <p className="text-xs sm:text-sm text-gray-700 mb-4">Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives.</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Votre e-mail"
                  className="bg-white text-xs sm:text-sm"
                />
                <Button className="bg-[#6a8f53] hover:bg-[#5c7847] transition-all">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center mb-6 sm:mb-8"
          >
            {[
              "https://ext.same-assets.com/3048998827/109880126.svg",
              "https://ext.same-assets.com/3048998827/2788639062.svg",
              "https://ext.same-assets.com/3048998827/710265941.svg",
              "https://ext.same-assets.com/3048998827/12905003.svg",
              "https://ext.same-assets.com/3048998827/2746403330.svg",
              "https://ext.same-assets.com/3048998827/1095663460.svg",
              "https://ext.same-assets.com/3048998827/1827488021.svg"
            ].map((payment, i) => (
              <motion.img
                key={i}
                whileHover={{ scale: 1.1 }}
                src={payment}
                alt="Payment"
                className="h-6 sm:h-8 hover:opacity-80 transition-all cursor-pointer"
              />
            ))}
          </motion.div>

          <div className="text-center text-xs sm:text-sm text-gray-600 mb-4">
            <p>© 2025 La Green Touch. Commerce électronique propulsé par Shopify</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="text-gray-700 hover:text-[#6a8f53] transition-colors">Idées cadeaux et créations végétales</a>
            <a href="#" className="text-gray-700 hover:text-[#6a8f53] transition-colors">Plantes d'intérieur</a>
            <a href="#" className="text-gray-700 hover:text-[#6a8f53] transition-colors">Kit terrarium</a>
            <a href="#" className="text-gray-700 hover:text-[#6a8f53] transition-colors">Plante + pot</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
