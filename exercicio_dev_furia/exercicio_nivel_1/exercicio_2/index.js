function custoDeFabricação(custoDeFabrica, percentualDoDistribuidor, percentualDoImposto) {
  return custoDeFabrica + (custoDeFabrica * percentualDoDistribuidor) + (custoDeFabrica *percentualDoImposto)
};

console.log(custoDeFabricação(1000, 28/100, 45/100));

