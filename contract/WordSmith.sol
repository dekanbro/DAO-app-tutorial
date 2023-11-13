// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.19;

// import "@openzeppelin/contracts@4.9.3/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts@4.9.3/access/Ownable.sol";

// import "@daohaus/baal-contracts/contracts/interfaces/IBaal.sol";

// import {Base64} from "./lib/Base64.sol";
// import "./IPoster.sol";

// contract WordSmithNFT is ERC721, Ownable {
//     string public constant shamanName = "NFTCuratorShaman";
//     uint256 private _nextTokenId = 1;
//     string private _imageUri = "bafybeih6r3rpmbjmk5ys3y42rzcqe36vpnxydmehp3dyydexcmofredl6e/DAOsSuck.png";
//     string private _animationUri = "bafybeig32nyuekisumy7ozyhdrrbi5rqwfsnltniumlj76vmtwi4xhcw6y";
//     string private _externalUri = "bafybeig32nyuekisumy7ozyhdrrbi5rqwfsnltniumlj76vmtwi4xhcw6y";
//     // address public _target = 0x1aCFF11474B9C6D15966Da7A08eD23438CDE23D4;
//     address public _baal = 0x5af8251405d0af2Ac5b70d48c2Ff1e4fE4e04FC4; // the dao
//     IPoster public _poster = IPoster(0x000000000000cd17345801aa8147b8D3950260FF);
//     uint256 public _price = 420000000000000;

//     mapping(bytes32 hash => uint256 tokenId) public posts; 
//     mapping(uint256 tokenId => bytes32 hash) public chashes; 
//     mapping(uint256 tokenId => uint256 parentId) public mints; 

//     mapping(uint256 parentId => uint256[] childIds) public childs; 

//     constructor()
//         ERC721("WordSmiths", "WORD")
//         // Ownable(initialOwner) // OZ 5+
//     {}

//     function setImageUri(string memory uri) public onlyOwner {
//         _imageUri = uri;
//     }

//     function setAnimationUri(string memory uri) public onlyOwner {
//         _animationUri = uri;
//     }

//     function setExternalUri(string memory uri) public onlyOwner {
//         _externalUri = uri;
//     }

//     function setPrice(uint256 price) public onlyOwner {
//         _price = price;
//     }

//     function setBaal(address baal) public onlyOwner {
//         _baal = baal;
//     }
    
//     function post(address to, bytes32 postId, string calldata content) public onlyOwner {
//         // only though proposal
//         uint256 tokenId = _nextTokenId++;
//         posts[postId] = tokenId;
//         chashes[tokenId] = postId;
//         _safeMint(to, tokenId);
//         _poster.post(content, "daohaus.member.database");

//         _mintTokens(to, 1 ether, true);

//     }

//     function collect(bytes32 postId) payable public  {
//         require(msg.value == _price, "not enough to mint");
//         require(posts[postId] != 0, "not a valid post");
//         uint256 targetTokenId = posts[postId];
//         uint256 authorFee = msg.value / 5; // 20%
//         address owner = ownerOf(targetTokenId);
//         (bool feeSuccess, ) = owner.call{value: authorFee}(""); /*Send ETH to author*/
//         require(feeSuccess, "could not send fee to author");
//         (bool success, ) = IBaal(_baal).target().call{value: msg.value - authorFee }(""); /*Send ETH to dao*/
//         require(success, "could not send to DAO");

//         _mintTokens(owner, 1 ether, false);

//         uint256 tokenId = _nextTokenId++;
//         mints[tokenId] = targetTokenId;
//         childs[targetTokenId].push(tokenId);
//         _safeMint(msg.sender, tokenId);
//     }

//     function _mintTokens(address to, uint256 amount, bool isShares) private {
//         address[] memory receivers = new address[](1);
//         receivers[0] = to;

//         uint256[] memory amounts = new uint256[](1);
//         amounts[0] = amount;

//         if (isShares) {
//             IBaal(_baal).mintShares(receivers, amounts);
//         } else {
//             IBaal(_baal).mintLoot(receivers, amounts);
//         }
//     }

//     /**
//      * Constructs the tokenURI, separated out from the public function as its a big function.
//      * Generates the json data URI
//      * param: _tokenId the tokenId
//      */
//     function _constructTokenURI(uint256 tokenId) internal view returns (string memory) {
//         string memory _nftName = string(abi.encodePacked("WordSmiths"));
//         string memory _image = string(
//             abi.encodePacked(
//                 "ipfs://",_imageUri
//             )
//         );
//         string memory _externalUrl = string(
//             abi.encodePacked(
//                 "ipfs://",_externalUri
//             )
//         );
//         string memory _animation = string(
//             abi.encodePacked(
//                 "ipfs://",
//                 _animationUri,
//                 "?tokenId=",
//                 Strings.toString(tokenId),
//                 "&chash=",
//                 string(abi.encodePacked(chashes[tokenId])),
//                 "&parent=",
//                 Strings.toString(mints[tokenId])
//             )
//         );

//         return string(
//             abi.encodePacked(
//                 "data:application/json;base64,",
//                 Base64.encode(
//                     bytes(
//                         abi.encodePacked(
//                             '{"name":"',
//                             _nftName,
//                             '", "image":"',
//                             _image,
//                             '", "external_url":"',
//                             _externalUrl, 
//                             '", "animation_url":"',
//                             _animation,
//                             '", "description": "Wordsmiths NFT", "attributes": [{"trait_type": "base", "value": "post"}]}'
//                         )
//                     )
//                 )
//             )
//         );
//     }

//     /* Returns the json data associated with this token ID
//      * param _tokenId the token ID
//      */
//     function tokenURI(uint256 tokenId) public view override returns (string memory) {
//         _exists(tokenId);
//         return string(_constructTokenURI(tokenId));
//     }
// }