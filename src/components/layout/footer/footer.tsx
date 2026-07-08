import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import Container from "@/components/common/container";
import DonateButton from "@/components/common/buttons/donate-button";
import EnquireButton from "@/components/common/buttons/enquire-button";
import { navigation } from "@/data/navigation";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-200 bg-slate-50"
    >
      <Container className="py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* About */}

          <div>

            <div className="mb-6 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A5EB0] text-lg font-bold text-white">
                VB
              </div>

              <div>

                <h3 className="font-heading text-lg font-bold">
                  Vishwa Bharathi
                </h3>

                <p className="text-sm text-slate-500">
                  Education Society
                </p>

              </div>

            </div>

            <p className="leading-7 text-slate-600">

              Providing special education,
              therapy and vocational training
              for children with intellectual
              disabilities since 1999.

            </p>

          </div>

          {/* Navigation */}

          <div>

            <h4 className="mb-5 font-semibold">
              Quick Links
            </h4>

            <div className="space-y-3">

              {navigation.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-slate-600 transition hover:text-[#0A5EB0]"
                >
                  {item.name}
                </Link>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="mb-5 font-semibold">
              Contact
            </h4>

            <div className="space-y-4">

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-3 text-slate-600"
              >
                <Phone size={18} />

                {SITE_CONFIG.phone}

              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-slate-600"
              >
                <Mail size={18} />

                {SITE_CONFIG.email}

              </a>

              <div className="flex items-start gap-3 text-slate-600">

                <MapPin size={18} />

                <span>

                  Ballari,
                  Karnataka,
                  India

                </span>

              </div>

            </div>

          </div>

          {/* CTA */}

          <div>

            <h4 className="mb-5 font-semibold">
              Support Us
            </h4>

            <p className="mb-6 text-slate-600">

              Together we can create
              a brighter future for
              every child.

            </p>

            <div className="flex flex-col gap-3">

              <DonateButton />

              <EnquireButton />

            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">

                <a
                    href={SITE_CONFIG.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-600 hover:text-[#0A5EB0]"
                >
                    Instagram
                </a>

                <a
                    href={SITE_CONFIG.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-600 hover:text-[#0A5EB0]"
                >
                    Facebook
                </a>

                <a
                    href={SITE_CONFIG.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-600 hover:text-[#0A5EB0]"
                >
                    YouTube
                </a>

                <a
                    href={SITE_CONFIG.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-600 hover:text-[#0A5EB0]"
                >
                    LinkedIn
                </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">

          © {new Date().getFullYear()} Vishwa Bharathi Kalanikethan and Education Society.

          All Rights Reserved.

        </div>

      </Container>
    </footer>
  );
}