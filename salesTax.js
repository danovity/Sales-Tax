var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];
function calculateSalesTax(salesData, taxRates) {
  // Implement your code here

  var companyResult = Object.keys(salesData).map((key, index) => {
    var joinedInfo = {};
    var name = salesData[key].name; //name: "Telus",
    var province = salesData[key].province; //province: "BC",
    var sales = salesData[key].sales; //sales: [100, 200, 400]
    var totalSales = sales.reduce((a, b) => {
      return a + b;
    });
    var taxRate = taxRates[province];
    var totalTaxes = parseFloat(
      sales.reduce((a, b) => {
        return a * taxRate + b * taxRate;
      })
    ).toFixed(2);
    var total = {
      totalSales,
      totalTaxes
    };

    joinedInfo[name] = total;

    return joinedInfo;
  });

  return companyResult;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
  {
    Telus: {
      totalSales: 1300
      totalTaxes: 144
    },
    Bombardier: {
      totalSales: 800,
      totalTaxes: 40
    }
  }
  */
console.log(results);
