import { QRCodeSVG } from "qrcode.react";
import logo from "@/assets/logo.png";

interface MemberData {
  full_name: string;
  member_no: string;
  id_number: string;
  date_joined: string;
  membership_type: string;
  photo_url: string | null;
  phone: string;
  email: string;
}

interface Props {
  member: MemberData;
  side: "front" | "back";
}

const MembershipCard = ({ member, side }: Props) => {
  const verifyUrl = `${window.location.origin}/verify/${member.member_no}`;

  if (side === "front") {
    return (
      <div
        className="relative overflow-hidden bg-white"
        style={{ width: 428, height: 270, borderRadius: 16 }}
      >
        {/* Green top wave */}
        <svg viewBox="0 0 428 80" className="absolute top-0 left-0 w-full" style={{ height: 80 }}>
          <path d="M0,0 L428,0 L428,50 Q320,80 214,55 Q100,30 0,60 Z" fill="#1B5E20" />
        </svg>

        {/* Yellow accent wave */}
        <svg viewBox="0 0 428 60" className="absolute top-0 left-0 w-full" style={{ height: 60 }}>
          <path d="M0,0 L428,0 L428,35 Q320,60 214,40 Q100,20 0,45 Z" fill="#F9A825" opacity="0.6" />
        </svg>

        {/* Logo */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-10 object-contain rounded-full bg-white p-0.5 shadow" />
          <div className="text-white text-xs font-bold leading-tight drop-shadow">
            <div>MABAWA UPLIFT</div>
            <div className="text-[8px] font-normal opacity-80">FOUNDATION</div>
          </div>
        </div>

        {/* MEMBERSHIP CARD title */}
        <div className="absolute top-[65px] left-1/2 -translate-x-1/2 z-10">
          <span className="bg-[#1B5E20] text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-widest uppercase">
            Membership Card
          </span>
        </div>

        {/* Content area */}
        <div className="absolute top-[90px] left-5 right-5 bottom-[40px] flex gap-4">
          {/* Photo */}
          <div className="w-[100px] h-[120px] rounded-lg overflow-hidden border-2 border-[#1B5E20] shadow-md flex-shrink-0 bg-gray-100">
            {member.photo_url ? (
              <img src={member.photo_url} alt={member.full_name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Photo</div>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 text-[11px] text-gray-800 space-y-1.5 pt-1">
            <div>
              <span className="text-gray-500 text-[9px] uppercase tracking-wide">Name</span>
              <div className="font-bold text-[13px] text-[#1B5E20]">{member.full_name}</div>
            </div>
            <div className="flex gap-4">
              <div>
                <span className="text-gray-500 text-[9px] uppercase tracking-wide">ID No.</span>
                <div className="font-semibold">{member.id_number}</div>
              </div>
              <div>
                <span className="text-gray-500 text-[9px] uppercase tracking-wide">Member No.</span>
                <div className="font-semibold text-[#F9A825]">{member.member_no}</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <span className="text-gray-500 text-[9px] uppercase tracking-wide">Date Joined</span>
                <div className="font-semibold">{member.date_joined}</div>
              </div>
              <div>
                <span className="text-gray-500 text-[9px] uppercase tracking-wide">Type</span>
                <div className="flex gap-2 items-center">
                  <span className={`inline-block w-3 h-3 rounded border ${member.membership_type === "18+" ? "bg-[#1B5E20] border-[#1B5E20]" : "border-gray-400"}`} />
                  <span className="text-[9px]">18+</span>
                  <span className={`inline-block w-3 h-3 rounded border ${member.membership_type === "junior" ? "bg-[#1B5E20] border-[#1B5E20]" : "border-gray-400"}`} />
                  <span className="text-[9px]">Junior</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 428 40" className="w-full" style={{ height: 40 }}>
            <path d="M0,15 Q107,0 214,10 Q321,20 428,5 L428,40 L0,40 Z" fill="#1B5E20" />
          </svg>
          <div className="absolute bottom-2 left-0 right-0 text-center text-white text-[8px] font-medium tracking-wider">
            Empowering Lives, Building Futures
          </div>
        </div>
      </div>
    );
  }

  // BACK SIDE
  return (
    <div
      className="relative overflow-hidden bg-white"
      style={{ width: 428, height: 270, borderRadius: 16 }}
    >
      {/* Green top wave */}
      <svg viewBox="0 0 428 60" className="absolute top-0 left-0 w-full" style={{ height: 60 }}>
        <path d="M0,0 L428,0 L428,35 Q320,55 214,40 Q100,25 0,45 Z" fill="#1B5E20" />
      </svg>
      <svg viewBox="0 0 428 45" className="absolute top-0 left-0 w-full" style={{ height: 45 }}>
        <path d="M0,0 L428,0 L428,25 Q320,40 214,28 Q100,16 0,32 Z" fill="#F9A825" opacity="0.5" />
      </svg>

      {/* Title */}
      <div className="absolute top-[14px] left-1/2 -translate-x-1/2 z-10">
        <span className="text-white text-[11px] font-bold tracking-wide">Member Information & Terms</span>
      </div>

      {/* Content */}
      <div className="absolute top-[55px] left-5 right-5 bottom-[42px] text-[9px] text-gray-700 flex gap-4">
        <div className="flex-1 space-y-3">
          {/* Terms */}
          <div>
            <div className="font-bold text-[10px] text-[#1B5E20] mb-1">Terms & Conditions</div>
            <ul className="space-y-1 list-disc list-inside">
              <li>This card remains the property of Mabawa Uplift Foundation.</li>
              <li>Members must adhere to the foundation's code of conduct.</li>
              <li>Report lost cards immediately for replacement.</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-bold text-[10px] text-[#1B5E20] mb-1">Contact</div>
            <div>📞 0724301244</div>
            <div>✉️ abigailisika@gmail.com</div>
          </div>

          {/* Signatures */}
          <div className="flex gap-6 mt-2">
            <div className="flex-1">
              <div className="border-b border-gray-400 mb-1 h-4" />
              <div className="text-[8px] text-gray-500">Member Signature</div>
            </div>
            <div className="flex-1">
              <div className="border-b border-gray-400 mb-1 h-4" />
              <div className="text-[8px] text-gray-500">Authorized Signature</div>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center justify-center">
          <QRCodeSVG value={verifyUrl} size={80} level="M" bgColor="transparent" fgColor="#1B5E20" />
          <div className="text-[7px] text-gray-500 mt-1 text-center">Scan to verify</div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 428 40" className="w-full" style={{ height: 40 }}>
          <path d="M0,15 Q107,0 214,10 Q321,20 428,5 L428,40 L0,40 Z" fill="#1B5E20" />
        </svg>
        <div className="absolute bottom-2 left-0 right-0 text-center text-white text-[8px] font-medium tracking-wider">
          www.mabawauplift.org
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
