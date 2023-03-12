IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[SHIPMENT]') AND type in (N'U'))
ALTER TABLE [dbo].[SHIPMENT] DROP CONSTRAINT IF EXISTS [FK_SHIPMENT_SHIPPER]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[SHIPMENT]') AND type in (N'U'))
ALTER TABLE [dbo].[SHIPMENT] DROP CONSTRAINT IF EXISTS [FK_SHIPMENT_SHIPMENT_RATE]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[SHIPMENT]') AND type in (N'U'))
ALTER TABLE [dbo].[SHIPMENT] DROP CONSTRAINT IF EXISTS [FK_SHIPMENT_CARRIER]
GO
/****** Object:  Table [dbo].[SHIPPER]    Script Date: 3/8/2023 4:18:20 PM ******/
DROP TABLE IF EXISTS [dbo].[SHIPPER]
GO
/****** Object:  Table [dbo].[SHIPMENT_RATE]    Script Date: 3/8/2023 4:18:20 PM ******/
DROP TABLE IF EXISTS [dbo].[SHIPMENT_RATE]
GO
/****** Object:  Table [dbo].[SHIPMENT]    Script Date: 3/8/2023 4:18:20 PM ******/
DROP TABLE IF EXISTS [dbo].[SHIPMENT]
GO
/****** Object:  Table [dbo].[CARRIER]    Script Date: 3/8/2023 4:18:20 PM ******/
DROP TABLE IF EXISTS [dbo].[CARRIER]
GO
/****** Object:  Table [dbo].[CARRIER]    Script Date: 3/8/2023 4:18:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CARRIER](
	[carrier_id] [int] NOT NULL,
	[carrier_name] [varchar](100) NOT NULL,
	[carrier_mode] [varchar](25) NOT NULL,
 CONSTRAINT [PK_CARRIER] PRIMARY KEY CLUSTERED 
(
	[carrier_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SHIPMENT]    Script Date: 3/8/2023 4:18:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SHIPMENT](
	[shipment_id] [int] NOT NULL,
	[shipper_id] [int] NOT NULL,
	[shipment_description] [varchar](100) NOT NULL,
	[shipment_weight] [numeric](18, 2) NOT NULL,
	[shipment_rate_id] [int] NOT NULL,
	[carrier_id] [int] NOT NULL,
 CONSTRAINT [PK_SHIPMENT] PRIMARY KEY CLUSTERED 
(
	[shipment_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SHIPMENT_RATE]    Script Date: 3/8/2023 4:18:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SHIPMENT_RATE](
	[shipment_rate_id] [int] NOT NULL,
	[shipment_rate_class] [varchar](10) NOT NULL,
	[shipment_rate_description] [varchar](25) NOT NULL
 CONSTRAINT [PK_SHIPMENT_RATE] PRIMARY KEY CLUSTERED 
(
	[shipment_rate_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SHIPPER]    Script Date: 3/8/2023 4:18:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SHIPPER](
	[shipper_id] [int] NOT NULL,
	[shipper_name] [varchar](100) NOT NULL,
 CONSTRAINT [PK_SHIPPER] PRIMARY KEY CLUSTERED 
(
	[shipper_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SHIPMENT]  WITH CHECK ADD  CONSTRAINT [FK_SHIPMENT_CARRIER] FOREIGN KEY([carrier_id])
REFERENCES [dbo].[CARRIER] ([carrier_id])
GO
ALTER TABLE [dbo].[SHIPMENT] CHECK CONSTRAINT [FK_SHIPMENT_CARRIER]
GO
ALTER TABLE [dbo].[SHIPMENT]  WITH CHECK ADD  CONSTRAINT [FK_SHIPMENT_SHIPMENT_RATE] FOREIGN KEY([shipment_rate_id])
REFERENCES [dbo].[SHIPMENT_RATE] ([shipment_rate_id])
GO
ALTER TABLE [dbo].[SHIPMENT] CHECK CONSTRAINT [FK_SHIPMENT_SHIPMENT_RATE]
GO
ALTER TABLE [dbo].[SHIPMENT]  WITH CHECK ADD  CONSTRAINT [FK_SHIPMENT_SHIPPER] FOREIGN KEY([shipper_id])
REFERENCES [dbo].[SHIPPER] ([shipper_id])
GO
ALTER TABLE [dbo].[SHIPMENT] CHECK CONSTRAINT [FK_SHIPMENT_SHIPPER]
GO
