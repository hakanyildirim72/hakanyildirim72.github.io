"""Replace the CV cover with a public contact-safe page, preserving academic records.

Usage: python generate-public-cv.py original.pdf public.pdf
"""

from __future__ import annotations

import io
import sys
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import simpleSplit
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


def draw_cover() -> bytes:
    regular = "/System/Library/Fonts/Supplemental/Arial.ttf"
    bold = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
    pdfmetrics.registerFont(TTFont("ArialCV", regular))
    pdfmetrics.registerFont(TTFont("ArialCV-Bold", bold))

    stream = io.BytesIO()
    page = canvas.Canvas(stream, pagesize=A4)
    width, height = A4
    margin = 48
    y = height - 55
    navy = colors.HexColor("#092B49")
    muted = colors.HexColor("#506878")

    def line(text: str, size: int = 10, font: str = "ArialCV", indent: int = 0, gap: int = 0):
        nonlocal y
        page.setFont(font, size)
        page.setFillColor(navy if font.endswith("Bold") else muted)
        for part in simpleSplit(text, font, size, width - 2 * margin - indent):
            page.drawString(margin + indent, y, part)
            y -= size * 1.35
        y -= gap

    def section(title: str):
        nonlocal y
        y -= 13
        page.setStrokeColor(colors.HexColor("#CCD9DF"))
        page.line(margin, y + 9, width - margin, y + 9)
        line(title, 12, "ArialCV-Bold", gap=8)

    line("HAKAN YILDIRIM", 23, "ArialCV-Bold", gap=4)
    line("Dr. Öğretim Üyesi · Bilgisayar Mühendisliği", 11, "ArialCV-Bold")
    line("E-posta: hakanyildirim72@gmail.com", 10)

    section("Öğrenim Bilgisi")
    line("Doktora · Piri Reis Üniversitesi · Deniz Ulaştırma İşletme Mühendisliği · 2012–2018", 10, "ArialCV-Bold")
    line("Tez: The application of shipbuilding managerial and operational capability assessment model (S-MCM) to Turkish shipyards", 9, indent=12, gap=6)
    line("Yüksek Lisans · Polis Akademisi · Ulaşım Güvenliği ve Yönetimi · 2010–2012", 10, "ArialCV-Bold")
    line("Tez: Fiziksel ve sanal güvenlik algısının TBMM çalışanları açısından analizi", 9, indent=12, gap=6)
    line("Lisans · Orta Doğu Teknik Üniversitesi · Elektrik-Elektronik Mühendisliği · 1989–1997", 10, "ArialCV-Bold")

    section("Akademik Görevler")
    appointments = [
        ("2026–", "Çankaya Üniversitesi · Bilgisayar Mühendisliği"),
        ("2024–2025", "Ankara Bilim Üniversitesi · Bilgisayar Mühendisliği"),
        ("2022–2023", "Beykent Üniversitesi · Bilgisayar Mühendisliği"),
        ("2021", "Antalya AKEV Üniversitesi · Yat Kaptanlığı"),
        ("2020", "Antalya AKEV Üniversitesi · Yönetim Bilişim Sistemleri"),
        ("2019–2020", "OSTİM Teknik Üniversitesi · Bilgi Güvenliği Teknolojisi"),
    ]
    for period, institution in appointments:
        line(f"{period}  {institution}", 10, gap=6)

    page.setStrokeColor(colors.HexColor("#CCD9DF"))
    page.line(margin, 47, width - margin, 47)
    page.setFont("ArialCV", 8)
    page.setFillColor(muted)
    page.drawString(margin, 32, "Kamuya açık özgeçmiş · Kişisel adres ve telefon bilgileri çıkarılmıştır.")
    page.drawRightString(width - margin, 32, "1")
    page.save()
    return stream.getvalue()


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: generate-public-cv.py original.pdf public.pdf")
    source = PdfReader(sys.argv[1])
    if len(source.pages) < 2:
        raise SystemExit("Expected the multi-page source CV")
    writer = PdfWriter()
    writer.add_page(PdfReader(io.BytesIO(draw_cover())).pages[0])
    for original_page in source.pages[1:]:
        writer.add_page(original_page)
    writer.add_metadata({"/Title": "Hakan Yıldırım — Akademik Özgeçmiş", "/Author": "Hakan Yıldırım"})
    output = Path(sys.argv[2])
    output.parent.mkdir(parents=True, exist_ok=True)
    with output.open("wb") as handle:
        writer.write(handle)


if __name__ == "__main__":
    main()
