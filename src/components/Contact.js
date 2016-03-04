import React from 'react';

class Contact extends React.Component{

  constructor(props){

    super(props);

    this.state = { formValidate: false };
  }

  handleSubmit(e){

    console.log(e.currentTarget.id);

    this.setState({ formValidate: true });
  }

  render() {

    console.log(this.state);

    if(this.state.formValidate){

      return (
        <div className="index">
          Merci!
        </div>
      );

    }else
    {
      return (
        <div className="index">
          <form>
           <p><input type="text" name="name" placeholder="Votre nom prénom"/></p>
              <p><input type="email" name="email" placeholder="Votre email"/></p>
              <p><textarea placeholder="Votre message"></textarea></p>
              <button type="submit" id="link_send" onClick={this.handleSubmit.bind(this)}>Envoyer</button>
          </form>
        </div>
      );
    }
  }
}

export default Contact;
