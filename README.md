<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>KDSR Consultation | Share Recovery Experts</title>
<meta name="description" content="KDSR Consultation helps recover lost shares, dividends, and IEPF claims. Trusted financial recovery experts in India.">
<meta name="keywords" content="IEPF recovery, share recovery, lost shares, dividend recovery, financial consultant India">

<!-- OPEN GRAPH -->
<meta property="og:title" content="KDSR Consultation">
<meta property="og:description" content="Recover your lost wealth with trusted experts">
<meta property="og:image" content="Banner.png">

<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Arial;}
body{background:#f5f7fb;}

/* HEADER */
.navbar{
display:flex;justify-content:space-between;align-items:center;
padding:15px 40px;background:#0b2a4a;color:white;
position:sticky;top:0;z-index:1000;
}

.navbar img{height:45px}

/* HERO */
.hero{
height:85vh;
background:url("Banner.png") center/cover fixed;
display:flex;align-items:center;justify-content:center;
position:relative;color:white;text-align:center;
}

.hero::before{
content:"";position:absolute;width:100%;height:100%;
background:rgba(0,0,0,0.65);
}

.hero-content{position:relative;max-width:800px;}
.hero h1{font-size:48px;}
.hero p{margin-top:10px;font-size:18px;color:#ddd;}

.btn{
display:inline-block;margin-top:20px;
padding:12px 22px;
background:#facc15;
color:#0b2a4a;
font-weight:bold;
border-radius:6px;
text-decoration:none;
transition:0.3s;
}

.btn:hover{transform:scale(1.05);}

/* SECTIONS */
.section{padding:70px 20px;max-width:1100px;margin:auto;}
.section h2{text-align:center;margin-bottom:25px;}

/* SERVICES */
.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
}

.card{
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 5px 20px rgba(0,0,0,0.08);
transition:0.3s;
}

.card:hover{transform:translateY(-8px);}

/* CONTACT */
.contact{
background:#0b2a4a;
color:white;
padding:60px 20px;
text-align:center;
}

input,textarea{
width:80%;padding:12px;margin:8px;
border:none;border-radius:5px;
}

/* FLOATING BUTTONS */
.whatsapp{
position:fixed;bottom:20px;right:20px;
background:#25D366;color:white;
padding:15px;border-radius:50%;
font-size:22px;text-decoration:none;
}

.call{
position:fixed;bottom:20px;left:20px;
background:#2563eb;color:white;
padding:15px;border-radius:50%;
font-size:18px;text-decoration:none;
}
</style>
</head>

<body>

<!-- NAV -->
<div class="navbar">
<img src="KDSR Logo Design with Shield Emblem.png">
<div>
<a href="#services" style="color:white;margin:10px;">Services</a>
<a href="#contact" style="color:white;margin:10px;">Contact</a>
</div>
</div>

<!-- HERO -->
<section class="hero">
<div class="hero-content">
<h1>Reclaim Your Lost Wealth</h1>
<p>Trusted Experts in Share Recovery & IEPF Claims</p>
<a class="btn" href="#contact">Get Free Assessment</a>
</div>
</section>

<!-- SERVICES -->
<section class="section" id="services">
<h2>Our Services</h2>

<div class="grid">
<div class="card">IEPF Share Recovery</div>
<div class="card">Transmission of Shares</div>
<div class="card">Deceased Claim Settlement</div>
<div class="card">PAN / KYC Support</div>
</div>
</section>

<!-- WHY US -->
<section class="section">
<h2>Why Choose Us</h2>
<div class="grid">
<div class="card">✔ 10+ Years Experience</div>
<div class="card">✔ 95% Success Rate</div>
<div class="card">✔ SEBI & MCA Process Compliance</div>
<div class="card">✔ Secure Document Handling</div>
</div>
</section>

<!-- CONTACT FORM (REAL LEAD GENERATION) -->
<section class="contact" id="contact">
<h2>Get Free Consultation</h2>

<form id="leadForm">
<input type="text" placeholder="Your Name" required><br>
<input type="tel" placeholder="Phone Number" required><br>
<input type="email" placeholder="Email"><br>
<textarea placeholder="Your Query"></textarea><br>
<button class="btn" type="submit">Submit</button>
</form>

<p style="margin-top:15px;">📞 +91-7973666876 | 📧 kuberdhan.shares@gmail.com</p>
</section>

<!-- FLOAT BUTTONS -->
<a class="whatsapp" href="https://wa.me/917973666876">💬</a>
<a class="call" href="tel:+917973666876">📞</a>

<script>
document.getElementById("leadForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const formData = {
    name: this.querySelector('input[placeholder="Your Name"]').value,
    phone: this.querySelector('input[type="tel"]').value,
    email: this.querySelector('input[type="email"]').value,
    message: this.querySelector('textarea').value
  };

  await fetch("https://script.google.com/macros/s/AKfycby_4OOq7QlgenE62FqrNiXjWZzljk19uNOnKsX1j_T-Ko5YxZ7ggB6Hl0NQAQy9rKFX/exec", {
    method: "POST",
    body: JSON.stringify(formData)
  });

  alert("Submitted Successfully! Our team will contact you shortly.");
  this.reset();
});
</script>

</body>
</html>
