import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify'
import aswconfig from './aws-exports'
import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(aswconfig)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>My app Content</h2>
      </header>
    </div>
  );
}

export default withAuthenticator (App);
