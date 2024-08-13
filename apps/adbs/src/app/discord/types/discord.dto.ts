import { ApiProperty } from "@nestjs/swagger";


export class DiscordDto {
    @ApiProperty({
        example: "ThugShakker"
    })
    discordChannel: string;

    @ApiProperty({
        example: "ThugShakker"
    })
    discordServer: string;

    @ApiProperty({
        example: "Something that doesnt matter...."
    })
    discordMessage: string;
}