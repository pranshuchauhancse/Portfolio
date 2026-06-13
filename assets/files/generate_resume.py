from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font('Arial', 'B', 16)
pdf.cell(0, 10, 'Pranshu Chauhan - Resume', 0, 1, 'C')
pdf.ln(2)
pdf.set_font('Arial', '', 11)
pdf.multi_cell(0, 6,
               'B.Tech Computer Science | GLA University, Mathura\n'
               'Final-Year Student\n'
               'Software Developer / Full Stack Developer\n'
               'Email: pranshuchauhan121005@gmail.com\n'
               'Phone: +91 6394174023\n'
               'Location: Farrukhabad, Uttar Pradesh, India\n'
               'GitHub: https://github.com/pranshuchauhancse\n'
               'LinkedIn: https://www.linkedin.com/in/pranshu-chauhan-731265290/')
pdf.ln(2)
pdf.set_font('Arial', 'B', 12)
pdf.cell(0, 8, 'Technical Skills', 0, 1)
pdf.set_font('Arial', '', 11)
pdf.multi_cell(0, 6,
               'Java, JavaScript, Python, HTML, CSS, Bootstrap, React.js, '
               'Node.js, Express.js, MongoDB, Git, GitHub, VS Code, Postman, DSA')
pdf.ln(2)
pdf.set_font('Arial', 'B', 12)
pdf.cell(0, 8, 'Projects', 0, 1)
pdf.set_font('Arial', '', 11)
pdf.multi_cell(0, 6,
               'Cash Craft - Personal Finance Management System (MERN Stack)\n'
               'Nyay-AI - AI-Powered Legal Assistance Platform (MERN Stack + AI)')
pdf.ln(2)
pdf.set_font('Arial', 'B', 12)
pdf.cell(0, 8, 'Achievements', 0, 1)
pdf.set_font('Arial', '', 11)
pdf.multi_cell(0, 6,
               '100+ DSA Problems Solved\n'
               'Full Stack Web Development Training\n'
               'Hackathon Participation\n'
               'Multiple MERN Stack Projects')
pdf.output('assets/files/Pranshu_Chauhan_Resume.pdf', 'F')
