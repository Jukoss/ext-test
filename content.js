
window.onload = function() {
const body = document.body;

const sidebar = document.createElement("div");
sidebar.classList.add('sidebar');
body.classList.add('test-searching');


const mPortlet = document.createElement("div");
mPortlet.classList.add('m-portlet');
sidebar.append(mPortlet);

const mPortletHead = document.createElement("div");
mPortletHead.classList.add('m-portlet__head');
mPortlet.append(mPortletHead);

const mPortletBody = document.createElement("div");
mPortletBody.classList.add('m-portlet__body');
mPortlet.append(mPortletBody);

const mPortletHeadCaption = document.createElement("div");
mPortletHeadCaption.classList.add('m-portlet__head-caption');
mPortletHead.append(mPortletHeadCaption);

const mPortletHeadTitle = document.createElement("div");
mPortletHeadTitle.classList.add('m-portlet__head-title');
mPortletHeadCaption.append(mPortletHeadTitle);

const mPortletHeadText = document.createElement("h3");
mPortletHeadText.classList.add('m-portlet__head-text');
mPortletHeadText.innerHTML = 'Search request';
mPortletHeadTitle.append(mPortletHeadText);

// console.log(document.querySelectorAll('.gLFyf')[0].value);

const requests = JSON.parse(localStorage.getItem('requests')) || [];

console.log('requests', requests);

// window.location.href

requests.map((request) => {
  const a = document.querySelectorAll(`[href="${request}"]`)[0];
  a.style.backgroundColor = 'yellow';
  console.log(a);
})



const anchors = document.querySelectorAll('.r a');
  for(let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      anchor.onclick = function(e) {
        e.preventDefault();
        const request = this.getAttribute('href'); 
        requests.push(request);
        console.log('requests', requests);
        localStorage.setItem('requests', JSON.stringify(requests));
      }
  }

body.append(sidebar);

}
