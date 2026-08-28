export const downloadResume = async (e) => {
  if (e && e.preventDefault) e.preventDefault();
  try {
    const candidates = ['/resume.pdf', '/resume.pdf.pdf', '/Thirumalai_V_Resume.pdf', '/Thirumalai_Resume.pdf'];
    let targetUrl = '/resume.pdf';

    for (const path of candidates) {
      try {
        const res = await fetch(path, { method: 'HEAD' });
        if (res.ok) {
          targetUrl = path;
          break;
        }
      } catch (err) {
        // continue checking
      }
    }

    const link = document.createElement('a');
    link.href = targetUrl;
    link.download = 'Thirumalai_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    window.open('/resume.pdf', '_blank');
  }
};
