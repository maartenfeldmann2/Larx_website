<script setup lang="ts">

import { onMounted, onUnmounted, ref, nextTick, watch, watchEffect, computed } from 'vue';

import { useData } from 'vitepress'


const { isDark } = useData();

const h2header = computed(() => {
  const fontColor = isDark.value 
    ? 'var(--vp-c-indigo-1)'
    : 'var(--vp-c-indigo-3)'
    
  return {  textFillColor: fontColor,
            
  }
})

const hero = computed(() => {
  const path = isDark.value 
    ? '/images/Collaboration/Dark/hero.png' 
    : '/images/Collaboration/Light/hero.png'
    
  return {  backgroundImage: `url(${path})`, 
            backgroundSize: `100%`,
            backgroundPosition: `50% 60%`,


        }
})


// images urls


</script>

<template>
    <section class="lx-section">
        <div class="lx-section-head">
                <h2 :style="h2header">Client Firm Collaboration</h2>
            </div>
  <div class="lx-showcase-image" :style="hero"></div>
</section>

<!-- ===== The problem ===== -->
<section class="lx-section">
  <div class="lx-section-head">
    <h2>A legal case is teamwork — email treats it like correspondence</h2>
    <p>Lawyers, client representatives, documents and deadlines all belong to the same case. So why is the communication scattered across inboxes, phone calls and forwarded threads?</p>
  </div>
  <div class="lx-grid lx-grid--4 lx-why">
    <div>
      <h4>No single source of truth</h4>
      <p>Half the story is in email, the rest in phone notes. Nobody has the complete picture.</p>
    </div>
    <div>
      <h4>People out of the loop</h4>
      <p>Forgot to CC someone? They miss a decision — and find out at the worst moment.</p>
    </div>
    <div>
      <h4>Slow back-and-forth</h4>
      <p>Simple questions take days by email. Meanwhile, the case waits.</p>
    </div>
    <div>
      <h4>No accountability</h4>
      <p>Who agreed to what, and when? Without a record, discussions repeat themselves.</p>
    </div>
  </div>
</section>

<!-- ===== Capability 1: the dossier ===== -->
<section class="lx-section">
  <div class="lx-showcase">
    <div class="lx-showcase-text">
      <h3>The dossier: single source of truth for firm and client</h3>
      <div class="lx-mini-feature">
        <h4>Everything about the case, in one place</h4>
        <p>Chat, documents, notes and agenda live inside the dossier — the complete, chronological record of the case from start to finish.</p>
      </div>
      <div class="lx-mini-feature">
        <h4>Only the people involved</h4>
        <p>Lawyers and client representatives are invited into the dossier. Nobody outside it can see a thing — not even colleagues at the same firm.</p>
      </div>
      <div class="lx-mini-feature">
        <h4>Switch dossiers on the fly</h4>
        <p>Involved in several cases? Jump between dossiers in one click — each with its own chat, files and unread counters.</p>
      </div>
    </div>
    <div class="lx-showcase-text">
      <h3>Chat that feels like WhatsApp — but belongs in a law firm</h3>
      <div class="lx-mini-feature">
        <h4>Group chat per dossier</h4>
        <p>Everyone involved in the case sees the same conversation, with rich text and shared documents right in the chat.</p>
      </div>
      <div class="lx-mini-feature">
        <h4>Private conversations when needed</h4>
        <p>Chat one-on-one with a colleague or a client representative — with read receipts, so you know your message landed.</p>
      </div>
      <div class="lx-mini-feature">
        <h4>Live presence</h4>
        <p>See who's online and who's typing. Unread counters per chat, and Larx takes you straight to your latest unread message.</p>
      </div>
    </div>
    <!-- <div class="lx-showcase-image">Screenshot placeholder — dossier timeline</div> -->
  </div>

  <!-- ===== Capability 2: the chat ===== -->
  <!-- <div class="lx-showcase lx-showcase--reverse">
    <div class="lx-showcase-text">
      <h3>Chat that feels like WhatsApp — but belongs in a law firm</h3>
      <div class="lx-mini-feature">
        <h4>Group chat per dossier</h4>
        <p>Everyone involved in the case sees the same conversation, with rich text and shared documents right in the chat.</p>
      </div>
      <div class="lx-mini-feature">
        <h4>Private conversations when needed</h4>
        <p>Chat one-on-one with a colleague or a client representative — with read receipts, so you know your message landed.</p>
      </div>
      <div class="lx-mini-feature">
        <h4>Live presence</h4>
        <p>See who's online and who's typing. Unread counters per chat, and Larx takes you straight to your latest unread message.</p>
      </div>
    </div>
    <div class="lx-showcase-image">Screenshot placeholder — dossier chat</div>
  </div> -->

  <!-- ===== Capability 3: beyond the chat ===== -->
  <div class="lx-showcase">
    <div class="lx-showcase-text">
      <h3>More than chat: notes, documents and agenda</h3>
      <div class="lx-mini-feature">
        <h4>Shared notes</h4>
        <p>Anyone in the dossier can leave a note — decisions, observations, reminders — visible to the whole team.</p>
      </div>
      <div class="lx-mini-feature">
        <h4>Documents, inside and outside the chat</h4>
        <p>Upload contracts, notary deeds and case files directly to the dossier at any time — no chat message required.</p>
      </div>
      <div class="lx-mini-feature">
        <h4>Dossier agenda</h4>
        <p>Hearings, deadlines and meetings for the case, in a shared agenda everyone involved can see.</p>
      </div>
    </div>
    <!-- <div class="lx-showcase-image">Screenshot placeholder — notes &amp; agenda</div> -->
  </div>
</section>

<!-- ===== Notifications ===== -->
<section class="lx-section">
  <div class="lx-section-head">
    <h2>Never miss a thing — wherever you are</h2>
    <p>A dossier moves even when you're not looking at it. Larx makes sure the right people know.</p>
  </div>
  <div class="lx-grid lx-grid--4 lx-why">
    <div>
      <h4>Email notifications</h4>
      <p>Every update in the dossier notifies the people involved by email, automatically.</p>
    </div>
    <div>
      <h4>Push on your phone</h4>
      <p>The Larx app for iOS and Android sends push notifications the moment something happens.</p>
    </div>
    <div>
      <h4>Unread at a glance</h4>
      <p>Unread counters per chat and per dossier show you exactly where attention is needed.</p>
    </div>
    <div>
      <h4>Straight to the point</h4>
      <p>Open a dossier and Larx jumps to your latest unread message — no scrolling, no searching.</p>
    </div>
  </div>
</section>

<!-- ===== Confidentiality & audit ===== -->
<section class="lx-section">
  <div class="lx-section-head">
    <h2>Confidential by design, accountable by default</h2>
  </div>
  <div class="lx-grid lx-grid--4 lx-why">
    <div>
      <h4>Dossier-level access</h4>
      <p>Content is visible only to the people invited into the dossier. Full stop.</p>
    </div>
    <div>
      <h4>Private stays private</h4>
      <p>One-on-one conversations are visible only to the two participants.</p>
    </div>
    <div>
      <h4>Everything logged</h4>
      <p>Every action in the dossier is recorded, so the firm admin can always reconstruct what happened, and when.</p>
    </div>
    <div>
      <h4>GDPR compliant</h4>
      <p>All communication and documents stay encrypted and within the European Union.</p>
    </div>
  </div>
</section>

<!-- ===== How it works ===== -->
<section class="lx-section">
  <div class="lx-section-head">
    <h2>From scattered emails to one dossier, in three steps</h2>
  </div>
  <div class="lx-steps">
    <div class="lx-step">
      <h4>Open a dossier</h4>
      <p>Create a dossier for the case and add the documents that belong to it.</p>
    </div>
    <div class="lx-step">
      <h4>Invite the team</h4>
      <p>Add the lawyers on your side and the representatives on the client's side. They get access to this dossier — and nothing else.</p>
    </div>
    <div class="lx-step">
      <h4>Collaborate in one place</h4>
      <p>Discuss in the chat, record decisions in notes, plan in the agenda — with the complete history in chronological order.</p>
    </div>
  </div>
</section>

<!-- ===== FAQ ===== -->
<section class="lx-section">
  <div class="lx-section-head">
    <h2>Frequently asked questions</h2>
  </div>
  <div class="lx-faq">
    <details>
      <summary>Can the client see internal discussions between lawyers?</summary>
      <p>Only what happens in the shared dossier chat is visible to everyone involved. Private one-on-one conversations are visible exclusively to the two participants.</p>
    </details>
    <details>
      <summary>What if someone is involved in multiple dossiers?</summary>
      <p>That's the normal situation. Each person sees a list of their dossiers with unread counters, and can switch between them instantly — each dossier keeps its own chat, files and agenda.</p>
    </details>
    <details>
      <summary>Do clients need to install anything?</summary>
      <p>No. Everything works in the browser. The iOS and Android app is optional — it adds push notifications for people who want to stay up to date on the go.</p>
    </details>
    <details>
      <summary>Is the chat history part of the case record?</summary>
      <p>Yes. The chat, notes and document activity form one chronological record of the dossier, and every action is logged for the firm admin.</p>
    </details>
    <details>
      <summary>Can I share documents inside the chat?</summary>
      <p>Yes — drop a document straight into the conversation, or upload it to the dossier outside the chat. Either way it becomes part of the dossier's file collection.</p>
    </details>
  </div>
</section>

<!-- ===== Final CTA ===== -->
<section class="lx-section">
  <div class="lx-banner lx-cta">
    <div class="lx-banner-text">
      <h3>Bring your next case into one dossier</h3>
      <ul class="lx-checklist">
        <li>✓ Free personal demo, no strings attached</li>
        <li>✓ Set up in one afternoon</li>
        <li>✓ No credit card required</li>
      </ul>
      <a class="lx-button" href="/about">Book a demo</a>
    </div>
    <div class="lx-banner-image">Screenshot placeholder</div>
  </div>
</section>
</template>


<!-- Unscoped on purpose: the frontmatter features are rendered inside the hero
     above, so hide the default VPFeatures section that VitePress would
     otherwise render below the hero (it would duplicate the cards). -->
<style>
/* .VPHome .VPFeatures {
  display: none;
} */
 
</style>
