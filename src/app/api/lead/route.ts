import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, course } = body ?? {};

    if (!name || !phone || !course) {
      return NextResponse.json(
        { ok: false, message: "Ism, telefon va kursni to'ldiring." },
        { status: 400 }
      );
    }

    const digits = String(phone).replace(/\D/g, "");
    if (digits.length < 9) {
      return NextResponse.json(
        { ok: false, message: "Telefon raqami to'liq emas." },
        { status: 400 }
      );
    }

    // Demo: bu yerda real loyihada Telegram bot / CRM / Google Sheets'ga
    // ariza yuboriladi. Hozir muvaffaqiyatli javob qaytaramiz.
    const id = `S21-${digits.slice(-4)}-${Math.abs(hash(name + course)) % 9000 + 1000}`;

    return NextResponse.json({
      ok: true,
      id,
      message: "Arizangiz qabul qilindi! Tez orada operatorlarimiz bog'lanadi.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Texnik xatolik. Birozdan so'ng urinib ko'ring." },
      { status: 500 }
    );
  }
}

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return h;
}
