import React from "react";
import { useEffect } from "react";


export default function Pricing() {
  useEffect(() => {
    document.title="Pricing"
    }, )
  return (
    <div>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                Pricing
                <span className="watermark">Pricing</span>
              </h1>
              <span className="sub-text">
                Explore the most scalable and comprehensible software
                development and IT Sourcing business solution. Upgrade as your
                needs change, or cancel at any time.{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="demopricing">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="pricingTable">
                  <div className="pricingTable-header">
                    <h3 className="title">Standard</h3>
                  </div>
                  <div className="price-value">
                    <span className="amount">$9.99</span>
                    <span className="duration">per month</span>
                  </div>
                  <ul className="pricing-content">
                    <li>50GB Disk Space</li>
                    <li>50 Email Accounts</li>
                    <li>50GB Bandwidth</li>
                    <li>Maintenance</li>
                    <li>15 Subdomains</li>
                  </ul>
                  <div className="pricingTable-signup">
                    <a href="#">Sign Up</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="pricingTable purple">
                  <div className="pricingTable-header">
                    <h3 className="title">Business</h3>
                  </div>
                  <div className="price-value">
                    <span className="amount">$19.99</span>
                    <span className="duration">per month</span>
                  </div>
                  <ul className="pricing-content">
                    <li>50GB Disk Space</li>
                    <li>50 Email Accounts</li>
                    <li>50GB Bandwidth</li>
                    <li>Maintenance</li>
                    <li>15 Subdomains</li>
                  </ul>
                  <div className="pricingTable-signup">
                    <a href="#">Sign Up</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="pricingTable purple">
                  <div className="pricingTable-header">
                    <h3 className="title">Business</h3>
                  </div>
                  <div className="price-value">
                    <span className="amount">$19.99</span>
                    <span className="duration">per month</span>
                  </div>
                  <ul className="pricing-content">
                    <li>50GB Disk Space</li>
                    <li>50 Email Accounts</li>
                    <li>50GB Bandwidth</li>
                    <li>Maintenance</li>
                    <li>15 Subdomains</li>
                  </ul>
                  <div className="pricingTable-signup">
                    <a href="#">Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
