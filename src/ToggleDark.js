

export const addDark = () => {
    
    document.querySelector('body').classList.add('darkToggle');
    document.querySelector('.navbar__flex').classList.add('darkToggle');
    document.querySelector('a.web-link-a-brand').classList.add('textWhite');
    document.querySelector('a.web-link-a-explore').classList.add('textWhite');
    document.querySelector('a.web-link-a-blog').classList.add('textWhite');
    document.querySelector('.btn__login-btn').classList.add('textWhite');
    document.querySelector('.logo-website').src = 'https://amatec-images.s3.eu-north-1.amazonaws.com/automation/Automasjon/Generelt/unsplash-logo.png';
    document.querySelector('.logo-div').classList.add('d-flex');
    document.querySelector('.logo-para').classList.add('mt-2');
    var element = document.querySelector('.photolist_ul')
    if ( typeof(element) !== 'undefined' && element !== null ) {
        document.querySelector('.photo-list-a-wall').classList.add('textWhite');
        document.querySelector('.photo-list-a-nature').classList.add('textWhite');
        document.querySelector('.photo-list-a-exper').classList.add('textWhite');
        document.querySelector('.photo-list-a-peop').classList.add('textWhite');
        document.querySelector('.photo-list-a-arch').classList.add('textWhite');
        document.querySelector('.photo-list-a-curr').classList.add('textWhite');
        document.querySelector('.photo-list-a-buss').classList.add('textWhite');
        document.querySelector('.photo-list-a-fash').classList.add('textWhite');
        document.querySelector('.photo-list-a-film').classList.add('textWhite');
        document.querySelector('.photo-list-a-heal').classList.add('textWhite');
        document.querySelector('.photo-list-a-view').classList.add('textWhite');
        document.querySelector('.photo-list-a-edit').classList.add('textWhite');
        document.querySelector('.photo-list-a-fe').classList.add('textWhite');
        document.querySelector('.photo-list-a-fea').classList.add('textWhite');
    }

    document.querySelector('.footer').classList.add('darkToggle');          
    document.querySelector('.footer_logo-website').src = 'https://amatec-images.s3.eu-north-1.amazonaws.com/automation/Automasjon/Generelt/unsplash-logo.png'; 
    document.querySelector('.footer_link-blue').classList.add('darkToggle');
    document.querySelector('.footer_link-seed').classList.add('darkToggle');
    document.querySelector('.footer_link-grap').classList.add('darkToggle');
    document.querySelector('.footer_link-nat').classList.add('darkToggle');
    document.querySelector('.footer_link-oce').classList.add('darkToggle');
    document.querySelector('.footer_link-for').classList.add('darkToggle');
    document.querySelector('.footer_social-facebook').classList.add('icons-white');
    document.querySelector('.footer_social-twitter').classList.add('icons-white');
    document.querySelector('.footer_social-instagram').classList.add('icons-white');
    document.querySelector('.footer_social-tiktok').classList.add('icons-white');
}


export const removeDark = () => {
    
    document.querySelector('body').classList.remove('darkToggle');
    document.querySelector('.navbar__flex').classList.remove('darkToggle');
    document.querySelector('a.web-link-a-brand').classList.remove('textWhite');
    document.querySelector('a.web-link-a-explore').classList.remove('textWhite');
    document.querySelector('a.web-link-a-blog').classList.remove('textWhite');
    document.querySelector('.btn__login-btn').classList.remove('textWhite');
    document.querySelector('.logo-website').src = 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Unsplash_wordmark_logo.svg';
    document.querySelector('.logo-div').classList.remove('d-flex');
    document.querySelector('.logo-para').classList.remove('mt-2');
    var element = document.querySelector('.photolist_ul')
    if ( typeof(element) !== 'undefined' && element !== null)  {
        
        document.querySelector('.photo-list-a-wall').classList.remove('textWhite');
        document.querySelector('.photo-list-a-nature').classList.remove('textWhite');
        document.querySelector('.photo-list-a-exper').classList.remove('textWhite');
        document.querySelector('.photo-list-a-peop').classList.remove('textWhite');
        document.querySelector('.photo-list-a-arch').classList.remove('textWhite');
        document.querySelector('.photo-list-a-curr').classList.remove('textWhite');
        document.querySelector('.photo-list-a-buss').classList.remove('textWhite');
        document.querySelector('.photo-list-a-fash').classList.remove('textWhite');
        document.querySelector('.photo-list-a-film').classList.remove('textWhite');
        document.querySelector('.photo-list-a-heal').classList.remove('textWhite');
        document.querySelector('.photo-list-a-view').classList.remove('textWhite');
        document.querySelector('.photo-list-a-edit').classList.remove('textWhite');
        document.querySelector('.photo-list-a-fe').classList.remove('textWhite');
        document.querySelector('.photo-list-a-fea').classList.remove('textWhite');
    }
   
    document.querySelector('.footer').classList.remove('darkToggle');          
    document.querySelector('.footer_logo-website').src = 'hhttps://upload.wikimedia.org/wikipedia/commons/4/4a/Unsplash_wordmark_logo.svg'; 
    document.querySelector('.footer_link-blue').classList.remove('darkToggle');
    document.querySelector('.footer_link-seed').classList.remove('darkToggle');
    document.querySelector('.footer_link-grap').classList.remove('darkToggle');
    document.querySelector('.footer_link-nat').classList.remove('darkToggle');
    document.querySelector('.footer_link-oce').classList.remove('darkToggle');
    document.querySelector('.footer_link-for').classList.remove('darkToggle');
    document.querySelector('.footer_social-facebook').classList.remove('icons-white');
    document.querySelector('.footer_social-twitter').classList.remove('icons-white');
    document.querySelector('.footer_social-instagram').classList.remove('icons-white');
    document.querySelector('.footer_social-tiktok').classList.remove('icons-white');
}