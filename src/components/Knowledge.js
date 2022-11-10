import React from 'react'
import JsonLd from './JsonLd'

function knowledge() {
    let data = {
        "@context": "http://www.schema.org",
        "@type": "Organization",
        "name": "TheRapidHire",
        "url": "https://therapidhire.com/",
        "sameAs": [
           "https://www.linkedin.com/company/therapidhire",
           "https://twitter.com/therapidhire_",
           "https://www.facebook.com/therapidhire/",
           "https://www.instagram.com/therapidhire_/"
        ],
        "logo": "https://therapidhire.com/images/logo.png",
        "description": "TheRapidHire Pvt. Ltd. is a CMMI Level-5 software development, IT outsourcing, and HR company. We are a CMMI 5-level certified organization providing quality products and professionals on a contract basis. With a mission to deliver quality services at a reasonable cost, TRH takes an agile, collaborative approach to create customized solutions across the digital value chain. Our deep expertise in infrastructure and applications management turns your ideas into reality. Our services include Web design, Web development, IT and Database, AWS, APP Development, Cloud Services, Database management, Cyber Security, and Payroll Management.",
        "address": {
           "@type": "PostalAddress",
           "streetAddress": "51, Electronic Complex, Pardesipura  ",
           "addressLocality": " Indore",
           "addressRegion": "Madhya Pradesh",
           "postalCode": "452007",
           "addressCountry": "India"
        }
    }
    let get = {
        "@context": "https://schema.org/", 
        "@type": "BreadcrumbList", 
        "itemListElement": [{
          "@type": "ListItem", 
          "position": 1, 
          "name": "Work with Us",
          "item": "https://therapidhire.com/workwithus"  
        },
        {
          "@type": "ListItem", 
          "position": 2, 
          "name": "Contact us",
          "item": "https://therapidhire.com/getaenquiry"  
        },
        {
          "@type": "ListItem", 
          "position": 3, 
          "name": "Services",
          "item": "https://therapidhire.com/services"  
   }]
  }

  return (
    <div>
        <JsonLd data={data} Get={get}/>           
    </div>
  )
}

export default knowledge;