<script setup lang="ts">

import { onMounted, onUnmounted, ref, nextTick, watch, watchEffect, computed } from 'vue';

import { useData } from 'vitepress'


const { isDark } = useData();

// images urls


const clientPortal = computed(() => {
  const path = isDark.value 
    ? '/images/Home/Dark/client_portal.png' 
    : '/images/Home/Light/client_portal.png'
    
  return {  backgroundImage: `url(${path})`, 
            backgroundSize: `150%`,
            backgroundPosition: `50% 65%`,


        }
})

const documentManagement = computed(() => {
  const path = isDark.value 
    ? '/images/Home/Dark/document_management.png' 
    : '/images/Home/Light/document_management.png'
    
  return {  backgroundImage: `url(${path})`, 
            backgroundSize: `100% 110%`,
            backgroundPosition: `50% 50%`,


        }
})

const collaboration = computed(() => {
  const path = isDark.value 
    ? '/images/Home/Dark/collaboration.png' 
    : '/images/Home/Light/collaboration.png'
    
  return {  backgroundImage: `url(${path})`, 
            backgroundSize: `140% 140%`,
            backgroundPosition: `50% 60%`,
        }
})

const clientManagement = computed(() => {
  const path = isDark.value 
    ? '/images/Home/Dark/client_management.png' 
    : '/images/Home/Light/client_management.png'
    
  return {  backgroundImage: `url(${path})`, 
            backgroundSize: `100% 110%`,
            backgroundPosition: `50% 50%`,


        }
})

const security = computed(() => {

    const path = '/images/Home/Various/security.jpg'
  
  return {  backgroundImage: `url(${path})`, 
            backgroundSize: `100% 110%`,
            backgroundPosition: `50% 50%`,


        }
})

const partner = computed(() => {

    const path = '/images/People/1.jpeg'
  
  return {  backgroundImage: `url(${path})`, 
            backgroundSize: 'cover',
            backgroundPosition: `50% 20%`,


        }
})

const lawyer = computed(() => {

    const path = '/images/People/2.jpg'
  
  return {  backgroundImage: `url(${path})`, 
            backgroundSize: `cover`,
            backgroundPosition: `50% 30%`,


        }
})

const officeManager = computed(() => {

    const path = '/images/People/3.jpg'
  
  return {  backgroundImage: `url(${path})`, 
            backgroundSize: `cover`,
            backgroundPosition: `50% 10%`,


        }
})

const client = computed(() => {

    const path = '/images/People/4.jpg'
  
  return {  backgroundImage: `url(${path})`, 
            backgroundSize: `cover`,
            backgroundPosition: `50% 10%`,


        }
})

const officeBuilding = computed(() => {

    const path = '/images/Home/Various/office_building.jpg'
  
  return {  backgroundImage: `url(${path})`, 
            backgroundSize: 'cover',
            backgroundPosition: `50% 20%`,


        }
})

</script>

<template>

        <!-- ===== Social proof / logo strip ===== -->

        <!-- <section class="lx-section lx-logos">
        <p class="lx-social-proof">Trusted by small law firms across the Netherlands</p>
        <div class="lx-logo-strip">
            <span class="lx-logo-placeholder">Client logo</span>
            <span class="lx-logo-placeholder">Client logo</span>
            <span class="lx-logo-placeholder">Client logo</span>
            <span class="lx-logo-placeholder">Client logo</span>
            <span class="lx-logo-placeholder">Client logo</span>
            <span class="lx-logo-placeholder">Client logo</span>
        </div>
        </section> -->


        <!-- ===== Feature showcase: alternating two-column blocks ===== -->
        <section class="lx-section">
        <div class="lx-section-head">
            <h2>Everything your firm needs, nothing it doesn't</h2>
            <p>One platform for the daily work of a small law firm — from the first client contact to the closed case file.</p>
        </div>

        <div class="lx-showcase">
            <div class="lx-showcase-text">
            <h3>Client portal</h3>
            <div class="lx-mini-feature">
                <h4>Client portal</h4>
                <p>Clients upload and download their documents in a branded portal when, and from where they like — onboarding takes one email.</p>
            </div>
            <div class="lx-mini-feature">
                <h4>Full access control</h4>
                <p>The firm decides who has access to which dossier — clients can't add or remove people themselves.</p>
            </div>
            <div class="lx-mini-feature">
                <h4>Version history</h4>
                <p>Always know which version is current, and roll back when needed.</p>
            </div>
            <a class="lx-link" href="/filesharing">Find out more →</a>
            </div>
            <div class="lx-showcase-image" :style="clientPortal"></div>
           <!-- <div class="lx-showcase-image" style="
                    background-image: url('/images/Home/Dark/client_portal.png');
                    
                    "></div> -->
        </div>

        <div class="lx-showcase lx-showcase--reverse">
            <div class="lx-showcase-text">
            <h3>Document Management</h3>
            <div class="lx-mini-feature">
                <h4>One dossier per case</h4>
                <p>Chat, documents, notes and agenda together in one secure dossier — the single source of truth for firm and client.</p>
            </div>
            <div class="lx-mini-feature">
                <h4>One management dashboard</h4>
                <p>Manage clients, teams and dossiers from one secure place, with every action logged.</p>
            </div>
            <div class="lx-mini-feature">
                <h4>Always in the loop</h4>
                <p>Email and push notifications on every update, and unread counters that take you straight to what's new.</p>
            </div>
            <a class="lx-link" href="/collaboration">Find out more →</a>
            </div>
            <div class="lx-showcase-image" :style="documentManagement"></div>
        </div>

        <div class="lx-showcase">
            <div class="lx-showcase-text">
            <h3>Collaboration</h3>
            <div class="lx-mini-feature">
                <h4>Full access control</h4>
                <p>The firm decides who has access to which dossier — clients can't add or remove people themselves.</p>
            </div>
            <div class="lx-mini-feature">
                <h4>Chat like WhatsApp</h4>
                <p>Group chat with everyone involved, or private one-on-one — with rich text, shared documents and read receipts.</p>
            </div>
            <div class="lx-mini-feature">
                <h4>Always in the loop</h4>
                <p>Email and push notifications on every update, and unread counters that take you straight to what's new.</p>
            </div>
            <a class="lx-link" href="/client-management">Find out more →</a>
            </div>
            <div class="lx-showcase-image" :style="collaboration"></div>
        </div>
        
        <div class="lx-showcase lx-showcase--reverse">
            <div class="lx-showcase-text">
            <h3>Client management</h3>
            <div class="lx-mini-feature">
                <h4>Full access control</h4>
                <p>The firm decides who has access to which dossier — clients can't add or remove people themselves.</p>
            </div>
            <div class="lx-mini-feature">
                <h4>The relationship in one place</h4>
                <p>Contracts, invoices and client profiles — including industry and legal areas, ready for targeted marketing.</p>
            </div>
            <div class="lx-mini-feature">
                <h4>One management dashboard</h4>
                <p>Manage clients, teams and dossiers from one secure place, with every action logged.</p>
            </div>
            <div class="lx-mini-feature">
                <h4>The relationship in one place</h4>
                <p>Contracts, invoices and client profiles — including industry and legal areas, ready for targeted marketing.</p>
            </div>
            <a class="lx-link" href="/client-management">Find out more →</a>
            </div>
            <div class="lx-showcase-image" :style="clientManagement"></div>
        </div>

        <!-- <div class="lx-showcase">
            <div class="lx-showcase-text">
            <h3>Marketing Management Engine</h3>
            <div class="lx-mini-feature">
                <h4>The relationship in one place</h4>
                <p>Contracts, invoices and client profiles — including industry and legal areas, ready for targeted marketing.</p>
            </div>
            <div class="lx-mini-feature">
                <h4>One management dashboard</h4>
                <p>Manage clients, teams and dossiers from one secure place, with every action logged.</p>
            </div>
            <div class="lx-mini-feature">
                <h4>The relationship in one place</h4>
                <p>Contracts, invoices and client profiles — including industry and legal areas, ready for targeted marketing.</p>
            </div>
            <a class="lx-link" href="/client-management">Find out more →</a>
            </div>
            <div class="lx-showcase-image" :style="marketingManagement">Screenshot placeholder</div>
        </div> -->

        <div class="lx-showcase lx-showcase">
            <div class="lx-showcase-text">
            <h3>Secure</h3>
            <div class="lx-mini-feature">
                <h4>Secure by default</h4>
                <p>Every document is encrypted and access-controlled. No more sensitive files in email attachments.</p>
            </div>
            <div class="lx-mini-feature">
                <h4>Full access control</h4>
                <p>The firm decides who has access to which dossier — clients can't add or remove people themselves.</p>
            </div>
            <a class="lx-link" href="/client-management">Find out more →</a>
            </div>
            <div class="lx-showcase-image" :style="security"></div>
        </div>

        </section>

        <!-- ===== Announcement / spotlight banner ===== -->
        <section class="lx-section">
        <div class="lx-banner">
            <div class="lx-banner-text">
            <span class="lx-badge">✨ New</span>
            <h3>Introducing the Larx client portal</h3>
            <p>Give your clients a secure, professional place to exchange documents and follow the progress of their case.</p>
            <a class="lx-link" href="/features">Learn more →</a>
            </div>
            <div class="lx-banner-image" :style="clientPortal"></div>
        </div>
        </section>

        <!-- ===== Persona / audience grid ===== -->
        <section class="lx-section">
        <div class="lx-section-head">
            <h2>Built for everyone in your firm</h2>
            <p>Larx adapts to how each person in a small firm actually works.</p>
        </div>
        <div class="lx-grid lx-grid--4">
            <div class="lx-card">
            <div class="lx-card-image" :style="partner"></div>
            <h4>The partner</h4>
            <p>Oversees every matter and keeps the firm running — without chasing status updates.</p>
            </div>
            <div class="lx-card">
            <div class="lx-card-image" :style="lawyer"></div>
            <h4>The associate</h4>
            <p>Drafts, reviews and collaborates on documents without version chaos.</p>
            </div>
            <div class="lx-card">
            <div class="lx-card-image" :style="officeManager"></div>
            <h4>The office manager</h4>
            <p>Handles intake, scheduling and files with everything in one place.</p>
            </div>
            <div class="lx-card">
            <div class="lx-card-image" :style="client"></div>
            <h4>The client</h4>
            <p>Shares documents and follows their case through a simple, secure portal.</p>
            </div>
        </div>
        <p class="lx-section-foot"><a class="lx-link" href="/about">Get to know more advantages →</a></p>
        </section>

        <!-- ===== Testimonials ===== -->
        <!-- <section class="lx-section">
        <div class="lx-section-head">
            <h2>What our customers say</h2>
            <p>Law firms of all kinds use Larx every day. Here's what they think.</p>
        </div>
        <div class="lx-grid lx-grid--2">
            <a class="lx-card lx-testimonial" href="/about">
            <p class="lx-quote">"Since we switched to Larx, we spend far less time emailing documents back and forth. Clients love the portal."</p>
            <div class="lx-person">
                <span class="lx-avatar">AB</span>
                <span><strong>Anna B.</strong><br>Partner, family law firm</span>
            </div>
            </a>
            <a class="lx-card lx-testimonial" href="/about">
            <p class="lx-quote">"When someone leaves a client, I revoke their access in one click — and I can prove it. That kind of control used to be impossible."</p>
            <div class="lx-person">
                <span class="lx-avatar">MK</span>
                <span><strong>Mark K.</strong><br>Founder, employment law practice</span>
            </div>
            </a>
            <a class="lx-card lx-testimonial" href="/about">
            <p class="lx-quote">"Finally software that doesn't need a manual. Our whole office was up and running in an afternoon."</p>
            <div class="lx-person">
                <span class="lx-avatar">SV</span>
                <span><strong>Sophie V.</strong><br>Office manager</span>
            </div>
            </a>
            <a class="lx-card lx-testimonial" href="/about">
            <p class="lx-quote">"Our clients now upload documents themselves — securely. That used to be our biggest headache."</p>
            <div class="lx-person">
                <span class="lx-avatar">JD</span>
                <span><strong>Jeroen D.</strong><br>Partner, real estate law</span>
            </div>
            </a>
        </div>
        <p class="lx-section-foot"><a class="lx-link" href="/about">Read all success stories →</a></p>
        </section> -->

        <!-- ===== Why choose Larx ===== -->
        <section class="lx-section">
        <div class="lx-section-head">
            <h2>Why you should choose Larx</h2>
        </div>
        <div class="lx-grid lx-grid--4 lx-why">
            <div>
            <h4>All-in-one</h4>
            <p>Files, collaboration and client management in a single platform — no more juggling tools.</p>
            </div>
            <div>
            <h4>Built for legal</h4>
            <p>Designed around how small law firms actually work, not adapted from generic software.</p>
            </div>
            <div>
            <h4>Personal support</h4>
            <p>Real people who know the product and understand legal practice.</p>
            </div>
            <div>
            <h4>GDPR compliant</h4>
            <p>Your data and your clients' data stay safe, compliant and in Europe.</p>
            </div>
        </div>
        </section>

        <!-- ===== Final CTA ===== -->
        <section class="lx-section">
        <div class="lx-banner lx-cta">
            <div class="lx-banner-text">
            <h3>See Larx in action</h3>
            <ul class="lx-checklist">
                <li>✓ Free personal demo, no strings attached</li>
                <li>✓ Set up in one afternoon</li>
                <li>✓ No credit card required</li>
            </ul>
            <a class="lx-button" href="/about">Book a demo</a>
            </div>
            <div class="lx-banner-image" :style="officeBuilding">Screenshot placeholder</div>
        </div>
        </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.35),
    rgba(0, 0, 0, 0.25) 50%,
    rgba(0, 0, 0, 0.45)
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1152px;
  padding: calc(var(--vp-nav-height) + 24px) 24px 48px;
  margin: 0 auto;
}

/* ===== Hero text (mirrors the native VPHero look) ===== */
.hero-main {
  margin: auto 0;
  text-align: center;
  padding: 40px 0;
}

.hero-name {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #a8b1ff; /* light brand tint, readable on the video */
  margin: 0;
}

.hero-text {
  font-size: clamp(1.75rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 8px 0 0;
}

.hero-tagline {
  max-width: 640px;
  margin: 20px auto 0;
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
}

/* ===== Action buttons (VitePress brand / alt themes) ===== */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
}

.hero-action {
  display: inline-block;
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.25s, color 0.25s, border-color 0.25s;
}

.hero-action--brand {
  border: 1px solid transparent;
  background-color: var(--vp-c-brand-3);
  color: #ffffff;
}

.hero-action--brand:hover {
  background-color: var(--vp-c-brand-2);
}

.hero-action--alt {
  border: 1px solid rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

.hero-action--alt:hover {
  background-color: rgba(255, 255, 255, 0.24);
}

/* ===== Feature cards at the bottom of the hero ===== */
.hero-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.hero-feature {
  display: block;
  padding: 24px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  text-decoration: none;
  transition: background-color 0.25s, border-color 0.25s;
}

a.hero-feature:hover {
  background-color: rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.4);
}

.hero-feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: rgba(246, 246, 247, 0.6);
  font-size: 18px;
  padding: 8px;
  margin-bottom: 16px;
}

.hero-feature-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: #ffffff;
  margin: 0;
  border: none;
  padding: 0;
}

.hero-feature-details {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  margin: 8px 0 0;
}

.hero-feature-link {
  font-size: 14px;
  font-weight: 500;
  color: #a8b1ff;
  margin: 12px 0 0;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .hero-features {
    grid-template-columns: 1fr;
  }
}
</style>

<!-- Unscoped on purpose: the frontmatter features are rendered inside the hero
     above, so hide the default VPFeatures section that VitePress would
     otherwise render below the hero (it would duplicate the cards). -->
<style>
.VPHome .VPFeatures {
  display: none;
}
</style>
