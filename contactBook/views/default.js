
$(document).ready(function(){
    currentNamespace.initialize();
});

(function(){
    this.currentNamespace=this.currentNamespace|| {};
    var ns=this.currentNamespace;
    var currentRecord;
    ns.initialize=function(){
        $('#btnSave').on('click',ns.save);
        ns.display();
    };

    ns.display=function(){
        $('#currentAction').html('Add Contact');
        currentRecord={key:null,contact:{}};
        displayCurrentRecord();
        var results=retrieveFromStorage();
        bindToGrid(results);
    };

    ns.loadContact=function(){
        var key=parseInt($(this).attr('data-key'));
        var results=retrieveFromStorage();
        $('#currentAction').html('Edit Contact');
        currentRecord={key:key,contact:results[key]};
        displayCurrentRecord();
    }

    ns.save=function(){
        var contact=currentRecord.contact;
        contact.firstName=$('#firstName').val();
        contact.lastName=$('#lastName').val();
        contact.email=$('#email').val();
        contact.phoneNumber=$('#phoneNumber').val();
        var results=retrieveFromStorage();
        if(currentRecord.key!=null){
            results[currentRecord.key]=contact;
        }
        else{
            results.push(contact);
        }
        localStorage.setItem('contacts',JSON.stringify(results));
        ns.display();
    }
    
    function retrieveFromStorage(){
        var contactsJs=window.localStorage.getItem("contacts");
        return contactsJs?JSON.parse(contactsJs):[];
    }

    function bindToGrid(results) {
        var html='';
        for(var i=0;i<results.length;i++) {
            var contact=results[i];
            html+='<tr><td>'+contact.email+'</td>';
            html+='<td>'+contact.firstName+' '+contact.lastName+'</td>';
            html+='<td><a class="edit" href="javascript:void(0)" data-key='+i+'>Edit</a></td></tr>';
        }
        html=html|| '<tr><td colspan="3">No records avaliable</td></tr>';
        $('#contacts tbody').html(html);
        $('#contacts a.edit').on('click',ns.loadContact);
      }

      function displayCurrentRecord(){
          var contact=currentRecord.contact;
          $('#firstName').val(contact.firstName);
          $('#lastName').val(contact.lastName);
          $('#email').val(contact.email);
          $('#phoneNumber').val(contact.phoneNumber);
      }

})();