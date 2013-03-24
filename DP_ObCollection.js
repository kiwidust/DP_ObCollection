/*  DepressedPress.com DP_ObCollection

Author: Jim Davis, the Depressed Press of Boston
Date: July 26, 2004
Contact: webmaster@depressedpress.com
Website: www.depressedpress.com

Full documentation can be found at:
http://www.depressedpress.com/Content/Development/JavaScript/Extensions/DP_ObCollection/Index.cfm

DP_ObCollections are used to manage groups of object instances ("Members") and abstract common group tasks.

	+ An DP_ObCollection does not maintain any specific order of it members.
	+ Members of an DP_ObCollectionOrdered may be optionally validated for type.
	+ A property of Member objects must contain a unique Key to be used as the member identifier. 

Constructor
	new DP_ObCollection(MemberKeyName, MemberType)
		"MemberKeyName" is the name of the property in the member objects to be used as a Key.
		"MemberType" is a reference to the constructor for the member class used.

Methods
	getCount()
		Returns a count of the objects in the DP_ObCollection.
	isEmpty()
		Returns "true" if the DP_ObCollection has no members.
	getCreationDate()
		Returns the date of the DP_ObCollection's creation.
	getMemberType()
		Returns a reference to the constructor of the member objects.
	getMemberKeyName()
		Returns the string name of the object key used as the member ID.
	getKeys()
		Returns and Array of all the keys in the DP_ObCollection.
	isMember(Member || MemberKey)
		Determines if a passed object exists in the DP_ObCollection
	get(MemberKey)
		Returns the passed member.
	getAll()
		Returns the members object.
	add(NewMember, AllowOverwrite)
		Adds the passed object into the DP_ObCollection.
	drop(Member || MemberKey)
		Drops the passed object.
	dropAll(), clear()
		Drops all objects from the DP_ObCollection.
	isValidType()
		Determines if an object is the of the correct type for the DP_ObCollection.

Copyright (c) 1996-2005, The Depressed Press of Boston (depressedpres.com)

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

+) Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. 

+) Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. 

+) Neither the name of the DEPRESSED PRESS OF BOSTON (DEPRESSEDPRESS.COM) nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/


	// Constuctor DP_ObCollection()
	// Usage
	//		Instantiates a new DP_ObCollection
	// Parameters
	//		Type: A reference to the constructor of the objects to be stored in the DP_ObCollection
	//		MemberKeyName: The property to be used as the unique identifier for DP_ObCollection members.
	// Return DP_ObCollection
	//
function DP_ObCollection(MemberKeyName, MemberType) {

		// Create the Members container
	this.Members = new Object;

		// Set the Member Properties
	this.MemberKeyName = MemberKeyName;
	if ( !MemberType ) {
		this.MemberType = MemberType;
	} else {
		this.MemberType = null;
	};

		// Create general information vars
	this.Count = 0;
	this.CreationDate = new Date();

		// Return, the DP_ObCollection object
	return this;

};


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* General Information Methods */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


	// Method getCount()
	// Usage
	//		Gets a count of the current DP_ObCollection members
	// Parameters
	//		None
	// Return (Integer)
	//		The number of DP_ObCollection members 
	//
DP_ObCollection.prototype.getCount = function getCount() {

		// Return, the count of members
	return this.Count;

};


	// Method isEmpty()
	// Usage
	//		Gets a count of the current DP_ObCollection members
	// Parameters
	//		None
	// Return (Boolean)
	//		"true" if no members exist, "false" if members exist 
	//
DP_ObCollection.prototype.isEmpty = function isEmpty() {

		// Return, the count of members
	return (this.Count == 0);

};


	// Method getCreationDate()
	// Usage
	//		Gets the date that the DP_ObCollection was first created
	// Parameters
	//		None
	// Return (Date)
	//		The date of the DP_ObCollection's creation 
	//
DP_ObCollection.prototype.getCreationDate = function getCreationDate() {

		// Return, the CreationDate
	return this.CreationDate;

};


	// Method getMemberType()
	// Usage
	//		Gets a reference to the constructor for the member objects
	// Parameters
	//		None
	// Return (Reference)
	//		The constructor for the member objects 
	//
DP_ObCollection.prototype.getMemberType = function getMemberType() {

		// Return, the MemberType
	return this.MemberType;

};


	// Method getMemberKeyName()
	// Usage
	//		Gets the key name used as the unique member identifier
	// Parameters
	//		None
	// Return (String)
	//		The member key name 
	//
DP_ObCollection.prototype.getMemberKeyName = function getMemberKeyName() {

		// Return, the MemberKeyName
	return this.MemberKeyName;

};


	// Method getKeys()
	// Usage
	//		Returns an Array of all the DP_ObCollection member keys.
	// Parameters
	//		None
	// Return (Array)
	//		An array of the member keys
	//
DP_ObCollection.prototype.getKeys = function getKeys() {

	var Cnt;
	var KeyArray = new Array();
	
	for ( Key in this.Members ) {
		KeyArray[KeyArray.length] = Key;
	};

		// Return, the Array
	return KeyArray;

};


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* DP_ObCollection Membership Methods */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


	// Method get()
	// Usage
	//		Returns a member from the DP_ObCollection.
	// Parameters
	//		MemberKey: The member to be returned
	// Return (Object)
	//		The member object specified
	//
DP_ObCollection.prototype.get = function get(MemberKey) {

	return this.Members[MemberKey];

};


	// Method getAll()
	// Usage
	//		Returns a reference to the Members object.
	// Parameters
	//		none
	// Return (Object)
	//		A reference to the Members object
	//
DP_ObCollection.prototype.getAll = function getAll() {

	return this.Members;

};


	// Method add()
	// Usage
	//		Adds a new member to the DP_ObCollection.
	// Parameters
	//		NewMember: An object to be added to the DP_ObCollection
	//		AllowOverwrite: (Optional, defaults to "false"): If false will not allow an object to overwrite an existing object with the same key value.
	// Return (Boolean)
	//		"true" if the member ID is added
	//		"false" if the add fails (due to type validation, for example)
	//
DP_ObCollection.prototype.add = function add(NewMember, AllowOverwrite) {

		// Is the object of the right type?
	if ( ! this.isValidType(NewMember) ) {
			// Return, the type is incorrect
		return false;
	};

		// Get the Member Key
	var NewMemberKey = NewMember[this.MemberKeyName];

		// Can we overwrite?
	if ( typeof AllowOverwrite != "boolean" ) {
		AllowOverwrite = false;
	};
		// Does the key exist?
	if ( ! AllowOverwrite ) {
		if ( typeof this.Members[NewMemberKey] != "undefined" ) {
			return false;
		};
	};

		// Add the member

	this.Members[NewMemberKey] = NewMember;

		// Update the Count
	this.Count++;

		// Return, succesful addition
	return true;

};


	// Method drop()
	// Usage
	//		Removes a member from the DP_ObCollection by member Key.
	// Parameters
	//		MemberKey: The object to be removed from the DP_ObCollection
	// Return Boolean
	//		"true" if the member ID was in the DP_ObCollection
	//		"false" if the member ID was not in the DP_ObCollection to begin with
	//
DP_ObCollection.prototype.drop = function drop(MemberKey) {

	var MemberExists;
	
		// determine if the key name already exists
	if ( this.isMember(MemberKey) ) {
		MemberExists = false;
	} else {
		MemberExists = true;
	};

		// Drop the member
	delete this.Members[MemberKey];

		// Update the Count
	this.Count--;

		// Return
	return MemberExists;

};


	// Method dropAll() [alternative clear()]
	// Usage
	//		Removes all members from the DP_ObCollection.
	// Parameters
	//		none
	// Return Boolean
	//		"true" is the only return
	//
DP_ObCollection.prototype.dropAll = DP_ObCollection.prototype.clear;
DP_ObCollection.prototype.clear = function dropAll() {

		// Update the collection with new array
	this.Members = new Object();

		// Return
	return true;

};


	// Method isMember()
	// Usage
	//		Determines if a member exists in the DP_ObCollection
	// Parameters
	//		MemberID
	// Return (Boolean)
	//		"true" if the member exists in the DP_ObCollection
	//		"false" if the member doesn't exist in the DP_ObCollection
	//
DP_ObCollection.prototype.isMember = function isMember(MemberID) {

	if ( this.Members[MemberID] !== undefined ) {
			// Return, the member exists
		return true;
	};
		// Return, the member does not exist
	return false;

};


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Utility Methods */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


	// Method isValidType()
	// Usage
	//		Checks the type of a passed object
	// Parameters
	//		Object
	// Return (Boolean)
	//		"true" if the object is of the correct type
	//		"false" if the object is not of the correct type
	//
DP_ObCollection.prototype.isValidType = function isValidType(ObjectToCheck) {

		// If the collection does not define a type, return true
	if ( this.MemberType == null ) {
		return true;
	};

		// If we're checking a type, do it
	if ( ( typeof ObjectToCheck == "object" ) && ( ObjectToCheck.constructor == this.MemberType ) ) {
			// Return, the object is the correct type
		return true;
	} else {
			// Return, the object is not the correct type
		return false;
	};

};