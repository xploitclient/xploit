 var currentTab = 'tab1'; // Initial active tab
    var tabCount = 1; // Initial tab count

    // Function to open a specific tab
    function openTab(evt, tabName) {
      var i, tabcontent, tablinks;

      // Hide all tab contents
      tabcontent = document.getElementsByClassName('tabcontent');
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
      }

      // Remove 'active' class from all tab links
      tablinks = document.getElementsByClassName('tablink');
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
      }

      // Show the selected tab content and mark the tab link as active
      document.getElementById(tabName).style.display = 'block';
      evt.currentTarget.classList.add('active');

      currentTab = tabName; // Update current active tab
    }

    // Function to open a new tab
    function openNewTab() {
      var newTabNumber = tabCount + 1;
      var newTabName = 'tab' + newTabNumber;

      var newTabLink = document.createElement('a');
      newTabLink.setAttribute('class', 'tablink');
      newTabLink.setAttribute('onclick', 'openTab(event, \'' + newTabName + '\')');
      newTabLink.innerHTML = ' <span class="tabname" ondblclick="editTabName(event, \'' + newTabName + '\')">Tab ' + newTabNumber + '</span>';
      newTabLink.innerHTML += '<span class="closebtn" onclick="closeTab(event, \'' + newTabName + '\')">&times;</span>';

      document.getElementsByClassName('navbar')[0].insertBefore(newTabLink, document.getElementsByClassName('tablink')[tabCount]);

      var newTabContent = document.createElement('div');
      newTabContent.setAttribute('id', newTabName);
      newTabContent.setAttribute('class', 'tabcontent');
      newTabContent.innerHTML = '<iframe id="iframe' + newTabNumber + '" src="https://xbananax.repl.co"></iframe>';

      document.body.appendChild(newTabContent);

      openTab(event, newTabName);
      tabCount++;
    }

    // Function to close a tab
    function closeTab(evt, tabName) {
      evt.stopPropagation();
      var tablink = evt.target.parentNode;
      var tabNameToClose = tablink.getAttribute('onclick').match(/'([^']+)'/)[1];
      var tabContent = document.getElementById(tabNameToClose);
      if (tablink.classList.contains('active')) {
        var prevTabLink = tablink.previousElementSibling || tablink.nextElementSibling;
        if (prevTabLink) {
          prevTabLink.click();
        }
      }
      tablink.remove();
      tabContent.remove();
      tabCount--;
    }

    // Function to edit the tab name
    function editTabName(evt, tabName) {
      var tabname = evt.target;
      var previousName = tabname.innerHTML;

      // Create an input element and set its attributes
      var inputElement = document.createElement('input');
      inputElement.setAttribute('type', 'text');
      inputElement.setAttribute('value', previousName);
      inputElement.setAttribute('class', 'tabname-input');

      // Replace the tab name with the input element
      tabname.parentNode.replaceChild(inputElement, tabname);
      inputElement.focus();

      // Add event listener to handle input changes
      inputElement.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          var newName = inputElement.value.trim();
          if (newName.length > 0) {
            inputElement.parentNode.innerHTML = newName;
          } else {
            inputElement.parentNode.innerHTML = previousName;
          }
        }
      });

      // Add event listener to handle input blur
      inputElement.addEventListener('blur', function () {
        var newName = inputElement.value.trim();
        if (newName.length > 0) {
          inputElement.parentNode.innerHTML = newName;
        } else {
          inputElement.parentNode.innerHTML = previousName;
        }
      });
    }



    // Set the initial tab as active
    document.getElementsByClassName('tablink')[0].click();
    function goBack() {
      window.history.back();
    }

    function goForward() {
      window.history.forward();
    }

    function home() {
      var iframe = document.getElementById('iframe');
      iframe.src = iframe.src;

    }

