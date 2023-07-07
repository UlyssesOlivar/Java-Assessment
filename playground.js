let nftCount = 0;

function mintNFT(animal,type,color) {
    const nft = {
        "animal": animal,
        "type": type,
        "color": color
    }

    nftCount++;
    return nft;
}
function listNFTs(nfts){
    for (let i = 0; i < nfts.length; i++){
        console.log("Animal: " + nfts[i].animal);
        console.log("Type: " + nfts[i].type);
        console.log("Color: " + nfts[i].color);
        console.log("**************************");
    }
}
function getTotalSupply(){
    console.log("Total NFTs " + nftCount);
}
const nft1 = mintNFT("Lion", "Mammal", "Gold" );
const nft2 = mintNFT("Frog", "Amphibian", "Green" );
const nft3 = mintNFT("Dolphin", "Mammal", "Grey" );
const nft4 = mintNFT("Crocodile", "Reptile", "Green" );

const nfts = [nft1, nft2, nft3, nft4];

listNFTs(nfts);

getTotalSupply();