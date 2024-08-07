import { useState } from 'react';
import { Player } from '../../interfaces/player.interface';
import { ReadyCheckbox } from '../Menus/Lobby/ReadyCheckbox';
import { CharacterSelector } from '../Characters/CharacterSelector';

import ObiWan from '../../assets/character-avatars/Obi-Wan.png';
import MaceWindu from '../../assets/character-avatars/Mace-Windu.png';
import Vader from '../../assets/character-avatars/Vader.png';
import Emporer from '../../assets/character-avatars/Emperor.png';

interface PlayerCardProps {
    player: Player;
}

export const PlayerCard = ({ player }: PlayerCardProps) => {
    const [isReady, setIsReady] = useState(false);
    const [isCharacterSelectorModalOpen, setIsCharacterSelectorModalOpen] = useState(false);

    const openCharacterSelectorModal = () => {
        setIsCharacterSelectorModalOpen(true);
    };

    const closeCharacterSelectorModal = () => {
        setIsCharacterSelectorModalOpen(false);
    };

    const handleCheckboxChange = () => {
        setIsReady(!isReady);
    };

    /**
     * Returns the string representation of the team.
     * @param team
     * @returns
     */
    const getTeamName = (team: number): string => {
        console.log(team);
        switch (team) {
            case 1:
                return 'Team 1';
            case 2:
                return 'Team 2';
            default:
                return '';
        }
    };

    const getCharacterAvatar = (character: string): string => {
        console.log(character);
        switch (character) {
            case 'ObiWan':
                return ObiWan;
            default:
                return '';
        }
    };

    return (
        <div className="flex items-center p-2 bg-gray-800 rounded-lg shadow-md mb-2">
            {/* TODO: Get avatar for selected character, link to character selector menu */}
            <img
                src={getCharacterAvatar(player.character)}
                alt="avatar"
                className=" h-20 rounded-full mr-4 cursor-pointer"
                onClick={openCharacterSelectorModal}
            />
            <CharacterSelector isOpen={isCharacterSelectorModalOpen} onClose={closeCharacterSelectorModal} />
            <div className="flex-1 text-white text-center text-2xl">{player.name}</div>

            {/* TODO: Allow team selector and adjust color based on team number */}
            <input
                type="text"
                value={getTeamName(player.teamNumber)}
                className="w-32 h-8 rounded bg-gray-700 text-white p-2 text-xl text-center"
                readOnly
            />

            <div className="ml-16">
                <ReadyCheckbox isChecked={isReady} onChange={handleCheckboxChange} />
            </div>
        </div>
    );
};
