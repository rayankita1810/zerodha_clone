import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="pt-5 pb-3 border-top"
      style={{ backgroundColor: "#FBFBFB" }}
    >
      <div className="container px-responsive">
        <div className="row mb-4">
          {/* Logo and short description */}
          <div className="col-12 col-sm ">
            <NavLink to="/" className="d-inline-block mb-2">
              <img
                src="assets/images/logo.svg"
                alt="Zerodha Logo"
                style={{ width: "120px" }}
              />
            </NavLink>
            <p className="text-muted mb-0" style={{ fontSize: "0.7rem" }}>
              &copy; 2010 - 2025, Zerodha Broking Ltd.
            </p>
            <p className="text-muted" style={{ fontSize: "0.7rem" }}>
              All rights reserved.
            </p>
          </div>

          {/* Account Links */}
          <div className="col-12 col-sm">
            <p className="fw-medium mb-2">Account</p>

            <ul className="list-unstyled small" style={{ fontSize: "0.8rem" }}>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Open demat account
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Minor demat account
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  NRI demat account
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Commodity
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Dematerialisation
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Fund transfer
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  MTF
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Referral program
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-12 col-sm">
            <p className="fw-medium mb-2">Support</p>

            <ul className="list-unstyled small" style={{ fontSize: "0.8rem" }}>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Contact us
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Support portal
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  How to file a complaint?
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Status of your complaints
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Bulletin
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Circular
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Z-Connect blog
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Downloads
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Company Links */}
          <div className="col-12 col-sm">
            <p className="fw-medium mb-2">Company</p>

            <ul className="list-unstyled small" style={{ fontSize: "0.8rem" }}>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  About
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Philosophy
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Press & media
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Careers
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Zerodha Cares (CSR)
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Zerodha.tech
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Open source
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="col-12 col-sm">
            <p className="fw-medium mb-2">Quick Links </p>

            <ul className="list-unstyled small" style={{ fontSize: "0.8rem" }}>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Upcoming IPOs
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Brokerage charges
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Market holidays
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Economic calendar
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Calculators
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Markets
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="text-muted text-decoration-none" to="/">
                  Sectors
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="text-muted mb-2" style={{ fontSize: "0.6rem" }}>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p className="text-muted mb-2" style={{ fontSize: "0.6rem" }}>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p className="text-muted mb-2" style={{ fontSize: "0.6rem" }}>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p className="text-muted mb-2" style={{ fontSize: "0.6rem" }}>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p className="text-muted mb-2" style={{ fontSize: "0.6rem" }}>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p className="text-muted mb-2" style={{ fontSize: "0.6rem" }}>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>
          <p className="text-muted mb-2" style={{ fontSize: "0.6rem" }}>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
          <p className="text-muted mb-2" style={{ fontSize: "0.6rem" }}>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3 text-muted text-center mt-2" style={{ fontSize: "0.7rem" }}>
          <p>NSE</p>
          <p>BSE</p>
          <p>MCX</p>
          <p>Terms & conditions </p>
          <p>Policies & procedures</p>
          <p>Privacy policy</p>
          <p>Disclosure For investor's attention</p>
          <p>Investor charter</p>
        </div>
      </div>
    </footer>
  );
}
