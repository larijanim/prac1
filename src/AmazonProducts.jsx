import NestedLinks from "./NestedLink";
const AmazonProducts=()=>{
    const responseData = {
        products: {
          analytics: {
            amazon_athena: {
            amazon_cloudsearch: {},
          },
          blockchain: {},
        },},
        solutions: {
          by_use_case: {},
          by_industry: {},
        },
        pricing: {},
        documentation: {},
      };
    return(<NestedLinks links={responseData} />)}
export default AmazonProducts;