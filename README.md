# 🏞️ Virtual Land Registry

A decentralized land registry and marketplace built on the Internet Computer Protocol (ICP). This application allows users to mint virtual land NFTs, manage their properties, and trade them in a peer-to-peer marketplace.

![Virtual Land Registry](https://img.shields.io/badge/Built%20on-Internet%20Computer-29ABE2?style=for-the-badge&logo=internet-computer&logoColor=white)
![Rust](https://img.shields.io/badge/Backend-Rust-000000?style=for-the-badge&logo=rust&logoColor=white)
![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

## ✨ Features

### 🎯 Core Functionality

- **🏗️ Land Minting**: Create unique virtual land NFTs with custom coordinates, names, and images
- **🖼️ Image Storage**: Upload and store land images directly on-chain as byte arrays
- **👤 Identity Management**: Secure authentication using Internet Identity
- **🏠 Portfolio Management**: View and manage all your minted lands in one place

### 🛒 Marketplace

- **📋 Listing System**: List your lands for sale with custom pricing
- **💰 Direct Trading**: Buy lands directly from other users
- **🔄 Dynamic Updates**: Real-time marketplace updates and inventory management
- **❌ Listing Management**: Remove listings and manage your marketplace presence

### 🎨 User Experience

- **📱 Responsive Design**: Mobile-first design with modern CSS Grid layouts
- **🌙 Modern UI**: Clean, professional interface with smooth animations
- **⚡ Fast Loading**: Optimized performance with efficient data fetching
- **🔔 Status Updates**: Real-time feedback for all user actions

## 🏗️ Architecture

### Backend (Rust + IC-CDK)

```
📦 Backend Canister
├── 🗄️ Land Storage (Vec<LandNFT>)
├── 🏪 Marketplace (HashMap<u64, Listing>)
├── 🔢 ID Management (Auto-incrementing)
└── 🔐 Authentication (Principal-based)
```

### Frontend (React + Vite)

```
📦 Frontend Application
├── 🔐 Authentication (Internet Identity)
├── 🎨 Components (Mint, Portfolio, Marketplace)
├── 🎯 Actor Management (Candid Interface)
└── 📱 Responsive UI (SCSS Modules)
```

## 🚀 Quick Start

### Prerequisites

- [DFX](https://internetcomputer.org/docs/current/developer-docs/setup/install/) (Internet Computer SDK)
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Rust](https://rustup.rs/) (for backend development)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/NamVr/Virtual-Land-Registry
   cd virtual-land-registry
   ```

2. **Start the local Internet Computer replica**

   ```bash
   dfx start --background
   ```

3. **Install frontend dependencies**

   ```bash
   npm install
   ```

4. **Deploy the canisters**

   ```bash
   dfx deploy
   ```

5. **Start the development server** (Optional)

   ```bash
   npm start
   ```

6. **Access the application** (DFX will provide canister URLs)
   - **Development**: `http://localhost:8080`
   - **Production**: `http://localhost:4943?canisterId={asset_canister_id}`

## 🎮 Usage Guide

### 1. Authentication

- Click "Login" to authenticate using Internet Identity
- Your Principal ID will be displayed in the navigation bar
- All land ownership is tied to your authenticated identity

### 2. Minting Land

- Navigate to "Mint Land" tab
- Fill in land details:
  - **Name**: Descriptive name for your land
  - **Coordinates**: X,Y position on the virtual map
  - **Size**: Dimensions (e.g., "10x10 meters")
  - **Image**: Upload a representative image
- Click "Mint Land" to create your NFT

### 3. Managing Your Portfolio

- Visit "My Lands" to view all your minted properties
- Each land displays:
  - Unique ID and name
  - Coordinates and size
  - Uploaded image
  - Current ownership status

### 4. Trading in the Marketplace

- Go to "Marketplace" to access trading features
- **Listing**: Set a price in ICP for any of your unlisted lands
- **Buying**: Purchase lands listed by other users
- **Management**: Remove your listings or update prices

## 🛠️ Technical Implementation

### Smart Contract (Rust)

```rust
// Core data structures
struct LandNFT {
    id: u64,
    name: String,
    coordinates: Coordinates,
    size: String,
    image_data: Vec<u8>,
    owner: Principal,
    timestamp: u64,
}

struct Listing {
    land_id: u64,
    price: u64,
    seller: Principal,
    listed_at: u64,
}
```

### Key Backend Functions

- `mint_land()` - Create new land NFTs
- `get_my_land()` - Retrieve user's lands
- `list_land_for_sale()` - Create marketplace listings
- `buy_land()` - Execute land purchases
- `get_marketplace_listings()` - Fetch all active listings

### Frontend Architecture

- **React Hooks**: State management with useState and useEffect
- **Actor Pattern**: Direct canister communication via Candid interface
- **Component Architecture**: Modular, reusable UI components
- **Responsive Design**: CSS Grid and Flexbox layouts

## 📁 Project Structure

```
virtual-land-registry/
├── src/
│   ├── backend/
│   │   ├── src/lib.rs              # Main canister logic
│   │   ├── Cargo.toml              # Rust dependencies
│   │   └── backend.did             # Candid interface
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/         # React components
│   │   │   │   ├── MintLandForm.jsx
│   │   │   │   ├── MyLands.jsx
│   │   │   │   ├── Marketplace.jsx
│   │   │   │   └── Navbar.jsx
│   │   │   ├── App.jsx             # Main application
│   │   │   ├── main.jsx            # Entry point
│   │   │   ├── index.scss          # Global styles
│   │   │   ├── actor.js            # Canister interaction
│   │   │   └── identity.js         # Authentication logic
│   │   ├── index.html              # HTML template
│   │   ├── package.json            # Dependencies
│   │   └── vite.config.js          # Build configuration
│   └── declarations/               # Auto-generated Candid bindings
├── dfx.json                        # DFX configuration
└── README.md                       # This file
```

## 🔧 Development Commands

```bash
# Backend Development
dfx deploy backend                  # Deploy only backend canister
dfx canister call backend mint_land # Test backend functions

# Frontend Development
npm run dev                        # Start development server
npm run build                     # Build for production
npm run generate                  # Regenerate Candid bindings

# Full Deployment
dfx deploy                        # Deploy all canisters
dfx deploy --network ic           # Deploy to mainnet
```

## 🧪 Testing

### Manual Testing Workflow

1. **Authentication Test**: Login/logout functionality
2. **Minting Test**: Create lands with various data types
3. **Portfolio Test**: Verify land display and data integrity
4. **Marketplace Test**: List, buy, and unlist lands
5. **Edge Cases**: Test with large images, special characters, etc.

### Backend Testing

```bash
# Test canister functions directly
dfx canister call backend get_all_land
dfx canister call backend get_marketplace_listings
```

## 🚀 Deployment

### Local Testing

```bash
dfx start --background
dfx deploy
npm start
```

### Production Deployment

```bash
dfx deploy --network ic --with-cycles 1000000000000
```

## 🔐 Security Features

- **Principal-based Authentication**: Secure identity management
- **Ownership Verification**: Strict land ownership checks
- **Input Validation**: Comprehensive data validation
- **Error Handling**: Graceful error management and user feedback
- **Immutable Records**: Blockchain-based data integrity

## 🎯 Future Enhancements

- [ ] **Land Categories**: Different types of virtual properties
- [ ] **Auction System**: Time-based bidding for premium lands
- [ ] **Land History**: Complete ownership and transaction history
- [ ] **Geographic Features**: Advanced coordinate system with regions
- [ ] **Mobile App**: Native mobile application
- [ ] **Integration**: Connect with other ICP ecosystems

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

- **Documentation**: [Internet Computer Docs](https://internetcomputer.org/docs/)
- **Community**: [DFINITY Developer Forum](https://forum.dfinity.org/)
- **Issues**: [GitHub Issues](../../issues)

## 🏆 Achievements

- ✅ Full-stack decentralized application
- ✅ On-chain image storage
- ✅ Real-time marketplace functionality
- ✅ Responsive modern UI/UX
- ✅ Production-ready architecture

---

**Built with ❤️ on the [Internet Computer](https://dfinity.org/)**

_Empowering the future of decentralized virtual real estate_
