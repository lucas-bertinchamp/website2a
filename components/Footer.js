import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer_style}>
      <div className="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3">
          <p class="col-md-4 mb-0 text-white">© 2022 Lucas Bertinchamp</p>

          <Link
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <Image
              src="/Logo_Mines_Nancy.png"
              alt="Logo Mines Nancy"
              height={787}
              className={styles.logo_style}
              width={1200}
            />
          </Link>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-white">
                Accueil
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-white">
                Le Projet
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-white">
                Download
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
