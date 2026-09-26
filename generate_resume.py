import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

pdf_path = r"d:\Projects\Pawan_Site\public\Pawan_Joshi_Resume.pdf"

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=36,
    rightMargin=36,
    topMargin=32,
    bottomMargin=32
)

styles = getSampleStyleSheet()

# Colors
PRIMARY = colors.HexColor("#0F172A")
ACCENT = colors.HexColor("#2563EB")
TEXT = colors.HexColor("#334155")
LIGHT_TEXT = colors.HexColor("#64748B")
LINE_COLOR = colors.HexColor("#E2E8F0")

# Styles
name_style = ParagraphStyle(
    'Name',
    fontName='Helvetica-Bold',
    fontSize=22,
    leading=26,
    alignment=TA_CENTER,
    textColor=PRIMARY
)

contact_style = ParagraphStyle(
    'Contact',
    fontName='Helvetica',
    fontSize=9.5,
    leading=13,
    alignment=TA_CENTER,
    textColor=TEXT
)

section_heading_style = ParagraphStyle(
    'SectionHeading',
    fontName='Helvetica-Bold',
    fontSize=12,
    leading=15,
    textColor=PRIMARY,
    spaceAfter=4
)

title_style = ParagraphStyle(
    'Title',
    fontName='Helvetica-Bold',
    fontSize=10.5,
    leading=13,
    textColor=PRIMARY
)

right_info_style = ParagraphStyle(
    'RightInfo',
    fontName='Helvetica',
    fontSize=9.5,
    leading=13,
    alignment=TA_RIGHT,
    textColor=TEXT
)

sub_style = ParagraphStyle(
    'Sub',
    fontName='Helvetica-Oblique',
    fontSize=9.5,
    leading=12,
    textColor=TEXT
)

sub_right_style = ParagraphStyle(
    'SubRight',
    fontName='Helvetica-Oblique',
    fontSize=9,
    leading=12,
    alignment=TA_RIGHT,
    textColor=LIGHT_TEXT
)

body_style = ParagraphStyle(
    'Body',
    fontName='Helvetica',
    fontSize=9,
    leading=12.5,
    textColor=TEXT
)

bullet_style = ParagraphStyle(
    'Bullet',
    fontName='Helvetica',
    fontSize=9,
    leading=12.5,
    textColor=TEXT,
    leftIndent=12,
    firstLineIndent=-8
)

bold_label_style = ParagraphStyle(
    'BoldLabel',
    fontName='Helvetica-Bold',
    fontSize=9,
    leading=13,
    textColor=PRIMARY
)

story = []

# Header
story.append(Paragraph("PAWAN JOSHI", name_style))
story.append(Spacer(1, 4))

contact_text = (
    "+91-7818975366 &nbsp;|&nbsp; "
    "<a href='mailto:joshipawan2021@gmail.com' color='#2563EB'>joshipawan2021@gmail.com</a> &nbsp;|&nbsp; "
    "<a href='https://linkedin.com/in/pwnjoshi' color='#2563EB'>linkedin.com/in/pwnjoshi</a> &nbsp;|&nbsp; "
    "<a href='https://github.com/pwnjoshi' color='#2563EB'>github.com/pwnjoshi</a>"
)
story.append(Paragraph(contact_text, contact_style))
story.append(Spacer(1, 8))

def add_section_header(title):
    story.append(Paragraph(title.upper(), section_heading_style))
    story.append(HRFlowable(width="100%", thickness=1, color=LINE_COLOR, spaceBefore=2, spaceAfter=8))

# Education
add_section_header("Education")
edu_data = [
    [
        Paragraph("<b>Graphic Era Deemed to be University</b>", title_style),
        Paragraph("<b>2024 &ndash; Present</b>", right_info_style)
    ],
    [
        Paragraph("<i>B.Tech in Computer Science and Engineering</i>", sub_style),
        Paragraph("<i>CGPA: 8.67/10.00, Dehradun, India</i>", sub_right_style)
    ]
]
t_edu = Table(edu_data, colWidths=[360, 180])
t_edu.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1),
]))
story.append(t_edu)
story.append(Spacer(1, 8))

# Work Experience
add_section_header("Work Experience")
exp_data = [
    [
        Paragraph("<b>Infosys Springboard</b>", title_style),
        Paragraph("<b>Dec 2025 &ndash; Feb 2026</b>", right_info_style)
    ],
    [
        Paragraph("<i>AI Engineering Intern</i>", sub_style),
        Paragraph("<i>Remote, India</i>", sub_right_style)
    ]
]
t_exp = Table(exp_data, colWidths=[360, 180])
t_exp.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1),
]))
story.append(t_exp)
story.append(Spacer(1, 4))
story.append(Paragraph("&bull; Built a stateful, multi-step agent framework in <b>LangGraph</b> that could break down complex tasks and run without manual intervention, landing around <b>80% accuracy</b> on task decomposition.", bullet_style))
story.append(Spacer(1, 2))
story.append(Paragraph("&bull; Kept hitting context-overflow crashes on jobs that generated 10,000+ log lines. Fixed it by building a small virtual file system inside the agent runtime to hold intermediate state instead of the context window.", bullet_style))
story.append(Spacer(1, 2))
story.append(Paragraph("&bull; Added <b>LangSmith</b> tracing across the pipeline for debugging, which helped push multi-step production runs above a <b>70% success rate</b>.", bullet_style))
story.append(Spacer(1, 8))

# Projects
add_section_header("Projects")

# Project 1
p1_data = [
    [
        Paragraph("<b>AWS Student Builder Platform & Portal</b> | <i>React, Node.js, AWS S3, CloudFront, DynamoDB</i>", title_style),
        Paragraph("<b>Jun 2026 &ndash; Aug 2026</b>", right_info_style)
    ]
]
t_p1 = Table(p1_data, colWidths=[400, 140])
t_p1.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1),
]))
story.append(t_p1)
story.append(Spacer(1, 4))
story.append(Paragraph("&bull; Built and deployed a serverless campus platform on AWS (S3, CloudFront, DynamoDB) that now serves <b>450+ registered builders</b> across <b>200+ institutions</b> in <b>35+ countries</b>.", bullet_style))
story.append(Spacer(1, 2))
story.append(Paragraph("&bull; Set up multi-tenant login (Google OAuth + JWT), an automated check for CLF-C02 certification claims, and a gamified XP/streak system to keep members coming back.", bullet_style))
story.append(Spacer(1, 2))
story.append(Paragraph("&bull; Tuned CDN delivery through CloudFront invalidations and split the DynamoDB indexes (GSIs), which got API latency under 100ms even during traffic spikes.", bullet_style))
story.append(Spacer(1, 6))

# Project 2
p2_data = [
    [
        Paragraph("<b>ARTAMS: Real-Time Attendance System</b> | <i>C, AWS EC2, Nginx, FastCGI, Hash Tables</i>", title_style),
        Paragraph("<b>Sep 2025 &ndash; Nov 2025</b>", right_info_style)
    ]
]
t_p2 = Table(p2_data, colWidths=[400, 140])
t_p2.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1),
]))
story.append(t_p2)
story.append(Spacer(1, 4))
story.append(Paragraph("&bull; Wrote the backend in C using hash tables for O(1) lookups and the Haversine formula to catch GPS spoofing attempts; held up to 100% integrity through testing.", bullet_style))
story.append(Spacer(1, 2))
story.append(Paragraph("&bull; Deployed it on an AWS EC2 instance (Ubuntu 24.04) behind Nginx, exposing FastCGI REST APIs so multiple clients could hit it concurrently without issues.", bullet_style))
story.append(Spacer(1, 8))

# Technical Skills
add_section_header("Technical Skills")
skills_data = [
    [Paragraph("<b>Languages:</b>", bold_label_style), Paragraph("C, C++, Java, Python, JavaScript, HTML/CSS", body_style)],
    [Paragraph("<b>Backend & Agent Frameworks:</b>", bold_label_style), Paragraph("Django, LangGraph, LangChain, LangSmith, REST APIs", body_style)],
    [Paragraph("<b>Cloud & DevOps:</b>", bold_label_style), Paragraph("AWS (EC2, S3, IAM), Git, GitHub", body_style)],
    [Paragraph("<b>Core CS:</b>", bold_label_style), Paragraph("Data Structures & Algorithms, Object-Oriented Design, Distributed Systems fundamentals", body_style)]
]
t_skills = Table(skills_data, colWidths=[150, 390])
t_skills.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('TOPPADDING', (0,0), (-1,-1), 1.5),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
]))
story.append(t_skills)
story.append(Spacer(1, 8))

# Positions of Responsibility
add_section_header("Positions of Responsibility")
por_data = [
    [
        Paragraph("<b>AWS Student Builder Group &ndash; Founding Leader</b>", title_style),
        Paragraph("<b>Nov 2025 &ndash; Present</b>", right_info_style)
    ],
    [
        Paragraph("<i>Amazon Web Services</i>", sub_style),
        Paragraph("<i>Graphic Era University, Dehradun</i>", sub_right_style)
    ]
]
t_por = Table(por_data, colWidths=[360, 180])
t_por.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1),
]))
story.append(t_por)
story.append(Spacer(1, 4))
story.append(Paragraph("&bull; Founded and lead campus's first AWS Student Builder Group, and put together a curriculum on EC2, S3, IAM, and serverless architecture for <b>400+ members</b>. Also mentored <b>300+ students</b> through hands-on GCP labs as a Google Cloud Arcade Facilitator.", bullet_style))
story.append(Spacer(1, 8))

# Achievements & Certifications
add_section_header("Achievements & Certifications")
achievements = [
    "&bull; <b>AWS Certified Cloud Practitioner</b> &ndash; Amazon Web Services (Jul 2026)",
    "&bull; <b>Google Cloud Generative AI Leader Certification</b> (Jul 2026)",
    "&bull; <b>Nebius Academy:</b> Agentic AI Builder & AI CloudOps Engineer Certifications (Jul 2026)",
    "&bull; <b>Amazon ML Summer School 2026</b>",
    "&bull; <b>AWS New Voices Cohort</b>",
    "&bull; <b>Finalist at Graph-E-Thon 2.0 and 3.0</b>"
]
for ach in achievements:
    story.append(Paragraph(ach, bullet_style))
    story.append(Spacer(1, 2))

doc.build(story)
print("PDF successfully generated at:", pdf_path)
