import React from 'react';

class Contact extends React.Component{

  constructor(props){

    super(props);

    this.state = { formValidate: false, ajaxStatus: '' };
  }

  handleClick() {

    var oData = new FormData(document.forms.namedItem('contact'));
    var oReq = new XMLHttpRequest();

    this.setState({ formValidate: true });

    oReq.open('POST', 'https://script.google.com/macros/s/AKfycbyAmsqxG4MDWaqRKGU9mYPlY7sHcyLr8cDuBp2v5NTf1b9uo6E/exec', true);
    oReq.onload = function()
    {
      if (oReq.status == 200)
      {
        var j = JSON.parse(oReq.responseText);

        for(var prop in j){

          if(prop == 'data'){

            var j2 = JSON.parse(j[prop]);

            for(var prop2 in j2){

              console.log(prop2+' '+ j2[prop2]);
            }
          }
        }

      }else {

        this.setState({ ajaxStatus: 'Error ' + oReq.status });
      }
    };

    oReq.send(oData);

  }

  render() {

    if(this.state.formValidate){

      return (
        <div className="index">
          Merci!<br/>
          {this.state.ajaxStatus !== '' ? this.state.ajaxStatus : ''}
        </div>
      );

    }else
    {
      return (
        <div className="index">
          <form name="contact" method="post">
           <p><input type="text" name="name" placeholder="Votre nom prénom"/></p>
              <p><input type="email" name="email" placeholder="Votre email"/></p>
              <p><textarea placeholder="Votre message" name="message"></textarea></p>
          </form>
          <p>
            <span style={{cursor: 'pointer'}}  id="link_send" onClick={this.handleClick.bind(this)}>Envoyer</span>
          </p>
        </div>
      );
    }
  }
}

export default Contact;
