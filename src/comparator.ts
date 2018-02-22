
export function comparator(v1: string, v2: string): number {
    const v1Constituents = v1.split('.');
    const v2Constituents = v2.split('.');

    for(let i = 0; i < 4; i++) {
        let v1VersionPart = Number(v1Constituents[i]);
        let v2VersionPart = Number(v2Constituents[i]);

        if (v1VersionPart > v2VersionPart) {
            return 1;
        }

        if (v2VersionPart > v1VersionPart) {
            return -1;
        }

        if (!isNaN(v1VersionPart) && isNaN(v2VersionPart)) {
            return 1;
        }

        if (isNaN(v1VersionPart) && !isNaN(v2VersionPart)) {
            return -1;
        }
    }

    return 0;
}