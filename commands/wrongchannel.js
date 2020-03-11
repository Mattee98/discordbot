module.exports = {
    name: 'Mwrongchannel',
    description: 'ree',
    execute(message, args) {
        var spmsg = ":regional_indicator_f::regional_indicator_a::regional_indicator_l::regional_indicator_s::regional_indicator_c::regional_indicator_h::regional_indicator_e::regional_indicator_r: \n:regional_indicator_c::regional_indicator_h::regional_indicator_a::regional_indicator_n::regional_indicator_n::regional_indicator_e::regional_indicator_l:";
        var msg = ["ICH MUTE EUCH GLEICH ALLE.",
                    "Falscher Chat. ",
                    "Falscher Channel.",
                    "fAlScHeR cHaNeL",
                    spmsg,
        ];
        var randomNum = Math.floor((Math.random()*5));
        message.delete();
        message.channel.send(msg[randomNum]);
    }
}