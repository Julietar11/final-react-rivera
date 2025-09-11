
// PIZZAS
import p_muzza from "../assets/pizzas/muzza.jpg";
import p_napolitana from "../assets/pizzas/napolitana.jpg";
import p_fugazzeta from "../assets/pizzas/fugazzeta.jpg";
import p_calabresa from "../assets/pizzas/calabresa.jpg";
import p_jamon from "../assets/pizzas/jamon.jpg";
import p_crudo from "../assets/pizzas/crudo.jpg";
import p_quesos from "../assets/pizzas/quesos.jpg";
import p_vegetariana from "../assets/pizzas/vegetariana.jpg";

// EMPANADAS
import e_carne from "../assets/empanadas/carne.jpg";
import e_espinaca from "../assets/empanadas/espinaca.jpg";
import e_jamonyqueso from "../assets/empanadas/jamonyqueso.jpg";
import e_pollo from "../assets/empanadas/pollo.jpg";
import e_calabaza from "../assets/empanadas/calabaza.jpg";
import e_vacio from "../assets/empanadas/vacio.jpg";
import e_cebollayqueso from "../assets/empanadas/cebollayqueso.jpg";
import e_cuatroquesos from "../assets/empanadas/cuatroquesos.jpg";


const basePizzas = [
  ["pz1", "Muzzarella", 17000, p_muzza, "Clásica con aceitunas", 20],
  ["pz2", "Napolitana", 18000, p_napolitana, "Con tomate y ajo", 15],
  ["pz3", "Fugazzeta", 17000, p_fugazzeta, "Cebolla y queso", 12],
  ["pz4", "Calabresa", 17500, p_calabresa, "Con longaniza", 10],
  ["pz5", "Jamón y Queso", 17800, p_jamon, "Jamón cocido y muzzarela suave", 8],
  ["pz6", "Rúcula y crudo", 18500, p_crudo, "Rúcula fresca y jamón crudo", 9],
  ["pz7", "Cuatro Quesos", 18200, p_quesos, "Roquefort, provolone, muzza y gruyere", 7],
  ["pz8", "Vegetariana", 17600, p_vegetariana, "Verduras asadas", 11],
];

const baseEmpanadas = [
  ["ep1", "Carne suave", 2000, e_carne, "Carne cortada a cuchillo, cebolla y morrón", 60],
  ["ep2", "Espinaca", 2200, e_espinaca, "Espinaca, muzzarela y nuez moscada", 50],
  ["ep3", "Jamón y queso", 2200, e_jamonyqueso, "Jamón natural y muzzarela suave", 70],
  ["ep4", "Pollo", 2200, e_pollo, "Pollo, morrón y cebolla", 65],
  ["ep5", "Calabaza", 1800, e_calabaza, "Calabaza con corazón de queso gouda", 55],
  ["ep6", "Vacio", 2500, e_vacio, "Tiras de vacío asado, con muzzarela", 60],
  ["ep7", "Cebolla y queso", 1900, e_cebollayqueso, "Cebolla salteada con muzzarela fresca", 50],
  ["ep8", "Cuatro Quesos", 2100, e_cuatroquesos, "Mix de quesos provolone, roquefort y gruyere", 45],
];


export const products = [
  ...basePizzas.map(([id, title, price, img, description, stock]) => ({
    id, title, price, img, description, stock, category: "pizzas",
  })),
  ...baseEmpanadas.map(([id, title, price, img, description, stock]) => ({
    id, title, price, img, description, stock, category: "empanadas",
  })),
];


export const getProducts = (categoryId) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(categoryId ? products.filter(p => p.category === categoryId) : products);
    }, 300);
  });

export const getProductById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => { resolve(products.find(p => p.id === id)); }, 300);
  });
