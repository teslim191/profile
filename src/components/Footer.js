import React from "react";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitterSquare size={30} color="#ffffff" /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookSquare size={30} color="#ffffff" /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaLinkedin size={30} color="#ffffff" /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaInstagramSquare size={30} color="#ffffff" /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaGithubSquare size={30} color="#ffffff" /></a>
    </div>
  );
}
