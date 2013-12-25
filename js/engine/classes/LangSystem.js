﻿/**
* Author
 @Inateno / http://inateno.com / http://dreamirl.com

* ContributorsList
 @Inateno

***
* singleton@LangSystem
 provide a dictionary system and make easy localisation of your game :)
 is inited by the SystemDetection (because to get the lang should depend of the platform)
 you can use getForce to get a value in a specific language
**/
define ( [ 'DE.CONFIG' ],
function( CONFIG )
{
  var LangSystem = new function()
  {
    this.DEName        = "LangSystem";
    this.currentLang   = "en";
    
    this.dictionnary   = {};
    this.avalaibleLang = new Array();
    
    this.init = function( dictionnary )
    {
      for ( var i in dictionnary )
      {
        this.dictionnary[ i ] = dictionnary[ i ];
        this.avalaibleLang.push( i );
      }
    }
    
    /****
     * get@String( what@String )
      return the value for the key what in the current language
     */
    this.get = function( what )
    {
      return this.dictionnary[ this.currentLang ][ what ] || null;
    }
    
    /****
     * forceget@String( lang@String, what@String )
      return the value for the key what in the given language
     */
    this.forceGet = function( lang, what )
    {
      if ( this.avalaibleLang.indexOf( lang ) == -1 )
        return null;
      return this.dictionnary[ lang ][ what ] || null;
    }
    
    /****
     * getLang@void( [lang@String] )
      detect the browser language or set a lang if specified
     */
    this.getLang = function( lang )
    {
      this.currentLang = this.avalaibleLang[ 0 ];
      if ( !lang )
        lang = navigator.language || navigator.browserLanguage || "en";
      
      for ( var i in this.dictionnary )
      {
        if ( lang.match( i ) )
        {
          this.currentLang = i;
          break;
        }
      }
    }
  };
  
  CONFIG.debug.log( "LangSystem loaded", 3 );
  return LangSystem;
} );