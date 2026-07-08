import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

import { contactInfo } from "@/data/contact";
import DonateButton from "@/components/common/buttons/donate-button";
import EnquireButton from "@/components/common/buttons/enquire-button";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-between h-full">

      {/* Heading */}

      <div>
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0A5EB0]">
          CONTACT INFORMATION
        </span>

        <h2 className="mt-4 text-2xl font-bold text-slate-900">
          Visit & Connect With Us
        </h2>

        <p className="mt-4 text-lg leading-6 text-slate-600">
          We welcome families, volunteers, donors and well-wishers to visit
          Vishwa Bharathi and experience our mission of care, education and
          inclusion.
        </p>
      </div>

      {/* Contact Cards */}

      <div className="mt-5 space-y-3">

        {/* Address */}

        <div className="flex gap-4 rounded-3xl bg-white p-3 shadow-lg">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
            <MapPin className="h-7 w-7 text-[#0A5EB0]" />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Address
            </h3>

            <p className="mt-2 text-slate-600 leading-6">
              {contactInfo.address.line1}
              <br />
              {contactInfo.address.line2}
              <br />
              {contactInfo.address.line3}
              <br />
              {contactInfo.address.line4}
            </p>
          </div>
        </div>

        {/* Phone */}

        <div className="flex gap-4 rounded-3xl bg-white p-3 shadow-lg">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
            <Phone className="h-7 w-7 text-[#0A5EB0]" />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Phone
            </h3>

            <p className="mt-2 text-slate-600">
              {contactInfo.phone}
            </p>
          </div>
        </div>

        {/* Email */}

        <div className="flex gap-4 rounded-3xl bg-white p-3 shadow-lg">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
            <Mail className="h-7 w-7 text-[#0A5EB0]" />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Email
            </h3>

            <p className="mt-2 text-slate-600">
              {contactInfo.email}
            </p>
          </div>
        </div>

        {/* Working Hours */}

        <div className="flex gap-4 rounded-3xl bg-white p-3 shadow-lg">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
            <Clock className="h-7 w-7 text-[#0A5EB0]" />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Working Hours
            </h3>

            <p className="mt-2 text-slate-600">
              {contactInfo.workingHours.weekdays}
            </p>

            <p className="text-slate-600">
              {contactInfo.workingHours.timing}
            </p>
          </div>
        </div>

      </div>

      {/* Action Buttons */}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <DonateButton className="flex-1" />

        <EnquireButton className="flex-1" />

      </div>

    </div>
  );
}