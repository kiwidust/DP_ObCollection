<h2>DP_ObCollection</h2>

<ul>	<li>Author: Jim Davis, the Depressed Press</li>
	<li>Created: July 26, 2004</li>
	<li><b>Documentation</b>: http://depressedpress.com/javascript-extensions/dp_obcollection/</li>
	<li>Contact: http://depressedpress.com/about/contact-me/</li>
	<li>Other Components: http://depressedpress.com/javascript-extensions/</li>
</ul>

<p>A DP_ObCollection is used to manage multiple instances of a JavaScript object as a single logical unit.  Object instances stored in the collection are called "Members" of the collection.  The DP_ObCollection assumes the following:</p>
<ul>	<li>The DP_ObCollection does not maintain any specific order of it members.</li>
	<li>Optionally all members of an DP_ObCollectionOrdered can be validated for type.</li>
	<li>A property of the specified Member object must contain a unique Key to be used as the member identifier.</li>
</ul>
<p>Use the more advanced <a href="http://depressedpress.com/javascript-extensions/dp_obcollectionordered/">DP_ObCollectionOrdered</a> if your application requires members to be maintained in order.</p>
<p>This component requires a JavaScript (ECMAScript) 1.3 (or better) run-time environment and has been tested successfully on Internet Explorer 6+, Firefox 1+ and Opera 9+.</p>

<blockquote style="background: #dedede;">
Copyright (c) 1996-2013, The Depressed Press (depressedpress.com)
<br />
All rights reserved.
<br />
Covered under the BSD Open Source License (included in the code).  Full legal information here: http://depressedpress.com/about/source-code-policy/
</blockquote>