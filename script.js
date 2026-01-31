// Data Grup Federasi
const groupsData = [
    {
        id: 1,
        name: "divisi ITK (informasi,teknologi,dan komunikasi)",
        category: "teknologi ",
        description: "Grup diskusi membahas sputar teknologi informasi,komunkasi, dan komunikasi. di sini kalian akan dapat tutorial bikin website pemula dan desain grafis dasar.",
        members: 78,
        ideology: "teknologi & inovasi",
        autonomy: "Tinggi",
        link: "https://chat.whatsapp.com/Ed6dmTYZJnRL4N0pqI3W6N"
    },
    {
        id: 2,
        name: "Divisi Astronomi Antariksa (Sains dan Observasi Langit)",
        category: "sains & astronomi",
        description: "Grup ini membahas fenomena alam semesta, bintang, planet, serta perkembangan riset astronomi dan teknologi antariksa.",
        members: 20,
        ideology: "sains & diskusi ilmiah",
        autonomy: "Sedang",
        link: "https://chat.whatsapp.com/IQ63ZyZ805CFAKMJxXkai8"
    },
    {
        id: 3,
        name: "Divisi Keamanan Siber dan Perlindungan Informasi",
        category: "teknologi & keamanan siber",
        description: " Grup ini menjadi ruang belajar bersama tentang keamanan jaringan, cyber awareness, ethical hacking, dan proteksi data pribadi.",
        members: 15,
        ideology: "keamanan & privasi digital",
        autonomy: "Tinggi",
        link: "https://chat.whatsapp.com/GSNYzjErnbC9kYHS7BRbCG"
    },
];

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const groupsContainer = document.getElementById('groupsContainer');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('mobile-menu');
    
    // Change icon
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Load Groups Data
function loadGroups() {
    groupsContainer.innerHTML = '';
    
    groupsData.forEach(group => {
        const groupCard = document.createElement('div');
        groupCard.className = 'group-card';
        
        groupCard.innerHTML = `
            <div class="group-header">
                <h3>${group.name}</h3>
                <span class="group-category">${group.category}</span>
                <div class="group-meta">
                    <span><i class="fas fa-users"></i> ${group.members} Anggota</span>
                    <span><i class="fas fa-star"></i> Otonomi: ${group.autonomy}</span>
                </div>
            </div>
            <div class="group-body">
                <p class="group-description">${group.description}</p>
                <p><strong>Ideologi:</strong> ${group.ideology}</p>
            </div>
            <div class="group-footer">
                <a href="${group.link}" class="btn btn-secondary btn-group">Lihat Detail & Gabung</a>
            </div>
        `;
        
        groupsContainer.appendChild(groupCard);
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            const nav = document.querySelector('nav ul');
            const icon = mobileMenuBtn.querySelector('i');
            if (nav.classList.contains('mobile-menu')) {
                nav.classList.remove('mobile-menu');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            // Scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Join Community Button Handler
document.addEventListener('DOMContentLoaded', function() {
    // Load groups when page loads
    loadGroups();
    
    // Handle join community button
    const joinCommunityBtn = document.querySelector('#join-community .btn-primary');
    if (joinCommunityBtn) {
        joinCommunityBtn.addEventListener('click', function(e) {
            // Log action (in real implementation, this would redirect to WhatsApp)
            console.log('Mengarahkan ke WhatsApp untuk bergabung dengan Komunitas Utama');
            // In a real implementation, this would be: window.location.href = "https://wa.me/..."
        });
    }
    
    // Handle group join buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-group') || 
            e.target.parentElement.classList.contains('btn-group')) {
            // Log action (in real implementation, this would redirect to group page)
            const groupName = e.target.closest('.group-card').querySelector('h3').textContent;
            console.log(`Mengarahkan ke halaman grup: ${groupName}`);
        }
    });
});

// Form submission handler (for contact form if added later)
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah dikirim. (Ini hanya simulasi)');
            form.reset();
        });
    });
});

const mobileBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
